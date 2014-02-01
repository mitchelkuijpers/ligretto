var should = require('should');
var builder = require('../game/builder');
var _ = require('underscore');

describe('Game Builder', function() {
  describe('build', function() {
    it('should create a state with four users', function() {
      var users = [{userId: '1'}, {userId: '2'}, {userId: '3'}, {userId: '4'}];
      var state = builder.build(users);
      state.users.should.have.length(4);
    });
    
    it('should create 5 stacks per user', function() {
      var state = builder.build([{userId: '1'}]);
      var user = _.find(state.users, function(user) {return user.userId === '1'});
      user.stacks.should.have.length(5);    
    });

    it('should create one stack with 10 cards, 3 stacks with one card and a stack with the rest', function() {
      var state = builder.build([{userId: '1'}]);
      var user = _.find(state.users, function(user) {return user.userId === '1'});
      
      user.stacks[0].should.have.length(10);
      user.stacks[1].should.have.length(1); 
      user.stacks[2].should.have.length(1); 
      user.stacks[3].should.have.length(1); 
      user.stacks[4].length.should.be.above(2);
    });
  })
})
