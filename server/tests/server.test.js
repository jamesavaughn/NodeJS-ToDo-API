//load test libraries
const expect = require('expect');
const request = require('supertest');

//load local libraries
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//clears out database
beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

//describe block
describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app) //request via supertest passing in the app
        .post('/todos') //post request 
        .send({text}) //send data with body, converted to JSON
        .expect(200) //assertion on status code
        .expect((res) => {
            expect(res.body.text).toBe(text); //customer assertion to test body text
        })
        .end((err, res) => { //callback to handle errors
            if (err) {
                return done(err); //returns error if error
            }
            
            Todo.find().then((todos) => { //finds todo then runs assertions
                expect(todos.length).toBe(1); //checks length of new todo array to be 1
                expect(todos[0].text).toBe(text); //checks text in first todo element
                done();
            }).catch((e) => done(e)); //catch call to catch other errors

        });
    });

    it('should not create todo with invalid body data', (done) => {
        //length of todos is 0
        var text = '';
                request(app) //request via supertest passing in the app
                .post('/todos') //post request 
                .send({}) //send no datadata with body, converted to JSON
                .expect(400) //assertion on status code
                
                .end((err, res) => { //callback to handle errors
                    if (err) {
                        return done(err); //returns error if error
                    }
                    
                    Todo.find().then((todos) => { //finds todo then runs assertions
                        expect(todos.length).toBe(0); //checks length of new todo array to be 1
                        done();
                    }).catch((e) => done(e)); //catch call to catch other errors
        
        });
    });
});