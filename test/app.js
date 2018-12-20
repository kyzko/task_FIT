process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Comment = require('../models/comment');
let moment = require('moment');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Comment', () => {
    let comments = {
        author: 'Alex',
        comment: 'Hi, everyone',
        data: moment().toJSON()
    };
    beforeEach((done) => {
        Comment.remove({}, (err) => {
            done();
        });
    });

        it('it should GET all the comments', (done) => {
            chai.request(app)
                .get('/api/comments')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });

        it('it should be GET with comments', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.comment)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });

        it('it should be GET with names', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.name)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });

        it('it should be GET with data', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });

        it('it should be GET with comments and data', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.comment, comments.name)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });

        it('it should be GET with comments and data', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.comment, comments.data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });

        it('it should be GET with names and data', (done) => {
            chai.request(app)
                .get('/api/comments')
                .send(comments.name, comments.data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });

        it('it should be erroneous GET', (done) => {
            chai.request(app)
                .get('/api/comments')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });

    describe('POST ', () => {
        it('it should be POST check ', (done) => {
            let comments = {
                name: 'Alex',
                comment: 'Hi, everyone',
                data: moment().toJSON()
            };
            chai.request(app)
                .post('/api/comments')
                .send(comments)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql(comments.name);
                    res.body.should.have.property('comment').eql(comments.comment);
                    res.body.should.have.property('data').eql(comments.data);
                    done();
                })
        });

        it('should be erroneous POST', (done) => {
            chai.request(app)
                .post('/api/comments')
                .send()
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
});
