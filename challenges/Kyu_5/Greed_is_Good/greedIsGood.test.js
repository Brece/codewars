const Test = require('@codewars/test-compat');

describe( "Scorer Function", function() {
	it( "should value this as worthless", function() {
		Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
	});
	
	it( "should value this triplet correctly", function() {
		Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
	});
	
	it( "should value this mixed set correctly", function() {
		Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
	});
});
