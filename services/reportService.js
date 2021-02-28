const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/' + env + '.json');
const Sequelize = require('sequelize');
var connection = require('../database/connection');
const Report = require('../models/report')(connection);


function ReportService()
{

}

ReportService.prototype.Get = (id) =>
{

}

ReportService.prototype.GetAll = () =>
{

}

ReportService.prototype.GetReportByDate =  (month, year, res) =>
{
     Report.findOne({where: {month: month, year: year}})
     .then(report => {
         res.send(report);
     })
}

ReportService.prototype.GetAllByYear = async (year) =>
{
    let data = await Report.findAll({where: {year: year}, raw: true});
    console.log(data);

    let previous_month = null;
    var resp = {};
    for(var i = 0; i<12; i++)
    {
        let month = reportService.getMonthFromIndex(i);
        let current_month = data.find(item => item.month == month);
        current_month = current_month ? current_month : reportService.CreateNewReportDetail(month, year);
        current_month.previous_month = previous_month;
        resp[month] = current_month;
        previous_month = {...current_month};
        delete previous_month.previous_month;

    }

    //console.log(resp);
    return resp;

}

ReportService.prototype.getMonthFromIndex = (index) => 
{
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[index];
}

ReportService.prototype.CreateNewReportDetail = (month, year) =>
{
    let report_of_current_month = 
    {
        month: month,
        year: year,
        statement_file: "",
        order_items_file: "",
        report_file: "",
        has_calculated_report: false,
        has_uploaded_exports: false,
    }
    return report_of_current_month;
}

ReportService.prototype.Upsert = async (report) =>
{
    let data = await Report.findOne({ where: {month: report.month, year: report.year}, raw: true });
    if(data) {
        await reportService.Update(report);
    }else{
        await reportService.Create(report);
    }
    console.log(data);
    return true;
}


ReportService.prototype.Create = async (report) =>
{
    await Report.create(report);
}

ReportService.prototype.Update = async (report) => 
{
    await Report.update(report, {where: {month: report.month, year: report.year}});
}



ReportService.prototype.DeleteReport = async  (year, month) =>
{
     await Report.destroy({
        where: {
            month: month,
            year: year
        }
    });
}

var reportService = new ReportService();
module.exports = reportService;