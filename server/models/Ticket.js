
var mongoose = require('mongoose');

//var ticketSchema = mongoose.Schema({
//    title: {type:String, required:'{PATH} is required!'},
//    featured: {type:Boolean, required:'{PATH} is required!'},
//    published: {type:Date, required:'{PATH} is required!'},
//    tags: [String]
//});
var ticketSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    contents: {type:String, required:'{PATH} is required!'},
    published: {type:Date, default: Date.now},
    user_id: {type:String},
    company: {type:String},
    comments: {
        contents: {type:String},
        published: {type:Date},
        user_id: {type:String},
        company: {type:String}
    },
    type: [String]
});
var Ticket = mongoose.model('Ticket', ticketSchema);

function createDefaultTickets() {
    Ticket.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            //open
            Ticket.create({title: '포트 오픈 해주세요', contents: '80포트 오픈 했습니다 확인 부탁드립니다', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요1', contents: '80포트 오픈 했습니다 확인 부탁드립니다1', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요11', contents: '80포트 오픈 했습니다 확인 부탁드립니다11', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요111', contents: '80포트 오픈 했습니다 확인 부탁드립니다22', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요1111', contents: '80포트 오픈 했습니다 확인 부탁드립니다222', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요11111', contents: '80포트 오픈 했습니다 확인 부탁드립니다333', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요22', contents: '80포트 오픈 했습니다 확인 부탁드립니다33', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            Ticket.create({title: '포트 오픈 해주세요222', contents: '80포트 오픈 했습니다 확인 부탁드립니다3', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['open']});
            //hold
            Ticket.create({title: '포트 오픈 해주세요', contents: '80포트 오픈 했습니다 확인 부탁드립니다', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요1', contents: '80포트 오픈 했습니다 확인 부탁드립니다1', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요11', contents: '80포트 오픈 했습니다 확인 부탁드립니다11', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요111', contents: '80포트 오픈 했습니다 확인 부탁드립니다22', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요1111', contents: '80포트 오픈 했습니다 확인 부탁드립니다222', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요11111', contents: '80포트 오픈 했습니다 확인 부탁드립니다333', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요22', contents: '80포트 오픈 했습니다 확인 부탁드립니다33', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            Ticket.create({title: '포트 오픈 해주세요222', contents: '80포트 오픈 했습니다 확인 부탁드립니다3', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['hold']});
            //close
            Ticket.create({title: '포트 오픈 해주세요', contents: '80포트 오픈 했습니다 확인 부탁드립니다', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요1', contents: '80포트 오픈 했습니다 확인 부탁드립니다1', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요11', contents: '80포트 오픈 했습니다 확인 부탁드립니다11', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요111', contents: '80포트 오픈 했습니다 확인 부탁드립니다22', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요1111', contents: '80포트 오픈 했습니다 확인 부탁드립니다222', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요11111', contents: '80포트 오픈 했습니다 확인 부탁드립니다333', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요22', contents: '80포트 오픈 했습니다 확인 부탁드립니다33', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
            Ticket.create({title: '포트 오픈 해주세요222', contents: '80포트 오픈 했습니다 확인 부탁드립니다3', published: new Date(), user_id: 'kys061@gmail.com', company: "에스비네트워크" ,comments: {}, type: ['close']});
        }
    })
}

exports.createDefaultTickets = createDefaultTickets;

//var mongoose = require('mongoose');
//
//var ticketSchema = mongoose.Schema({
//    title: {type:String, required:'{PATH} is required!'},
//    contents: {type:String, required:'{PATH} is required!'},
//    published: {type:Date, required:'{PATH} is required!'},
//    user_id: {type:String},
//    comments_id: {type:String},
//    type: [String]
//});
//
//var Ticket = mongoose.model('Ticket', ticketSchema);
//
//function createDefaultTickets() {
// Ticket.find({}).exec(function(err, ticket) {
//        if(ticket.length === 0) {
//         Ticket.create({title: '포트 오픈 해주세요', contents: '80포트 오픈 했습니다 확인 부탁드립니다', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요1', contents: '80포트 오픈 했습니다 확인 부탁드립니다1', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요11', contents: '80포트 오픈 했습니다 확인 부탁드립니다11', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요111', contents: '80포트 오픈 했습니다 확인 부탁드립니다22', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요1111', contents: '80포트 오픈 했습니다 확인 부탁드립니다222', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요11111', contents: '80포트 오픈 했습니다 확인 부탁드립니다333', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요22', contents: '80포트 오픈 했습니다 확인 부탁드립니다33', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//         //Ticket.create({title: '포트 오픈 해주세요222', contents: '80포트 오픈 했습니다 확인 부탁드립니다3', published: Date.now, user_id: '56469aede297162b72ff4462', comments_id: '', type: ['OPEN']});
//        }
//    })
//}
//
//exports.createDefaultTickets = createDefaultTickets;