let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server'); 


chai.should();
chai.use(chaiHttp);

describe('Testing API\'s',()=>{


    const newUser = {
        "username" : "xyz",
        "age" : 23,
        "email" : "xyz@gmail.com",
        "password" : "xyz"
    }

    const invalidUserEmail = {
        "username" : "xyz",
        "age" : 21,
        "password" : "xyz"
    }

    /**
     * Test the User Route
     */

    //For SignUp
     describe("POST /user/signup",()=>{
        it("It should create a new user",(done) => {
            chai.request(server)
            .post("/user/signup")
            .send(newUser)
            .end((err,res)=>{
                res.should.have.status(200);
                res.text.should.eql("The user has been signed up successfully!");
            done();
            })
        })
     })

     describe("POST /user/signup",()=>{
        it("It should give email already exist",(done) => {
            chai.request(server)
            .post("/user/signup")
            .send(newUser)
            .end((err,res)=>{
                res.should.have.status(404);
                res.text.should.eql("The entered Email is already Exist");
            done();
            })
        })
     })


     describe("POST /user/signup",()=>{
        it("It should give internal server error",(done) => {
            chai.request(server)
            .post("/user/signup")
            .send(invalidUserEmail)
            .end((err,res)=>{
                res.should.have.status(500);
                res.text.should.eql("Internal server error");
            done();
            })
        })
     })


     const userExist = {
        "email" : "xyz@gmail.com",
        "password" : "xyz"
    }

    const userNotExist = {
        "email" : "abc@gmail.com",
        "password" : "xyz"
    }

    const incorrectUser = {
        "email" : "xyz@gmail.com",
        "password" : "abc"
    }

    let validToken = "Beaver testToken";



     //For SignIn
     describe("POST /user/login",()=>{
        it("It should give successful Authentication",(done) => {
            chai.request(server)
            .post("/user/login")
            .send(userExist)
            .end((err,res)=>{
                validToken = validToken + res.body.token;
                res.should.have.status(200);
                res.body.should.eql({"msg": "Authentication has been successful","token":res.body.token});
            done();
            })
        })
     })

     describe("POST /user/login",()=>{
        it("It should give email is not exist",(done) => {
            chai.request(server)
            .post("/user/login")
            .send(userNotExist)
            .end((err,res)=>{
                res.should.have.status(404);
                res.body.should.eql({msg : 'Email not found'});
            done();
            })
        })
     })

     describe("POST /user/login",()=>{
        it("It should give incorrect email/password",(done) => {
            chai.request(server)
            .post("/user/login")
            .send(incorrectUser)
            .end((err,res)=>{
                res.should.have.status(404);
                res.body.should.eql({"msg" : 'Incorrect Email or Password!'});
            done();
            })
        })
     })
});