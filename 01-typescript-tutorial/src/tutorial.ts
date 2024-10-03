let unknownValue: unknown;

unknownValue = 'Hello World'; 
unknownValue = [1, 2, 3]; 
unknownValue = 42.3344556; 

// unknownValue.toFixed( );

if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2)); 
};

function runSomeCode() {
  const random = Math.random();
  console.log(random);
  if (random < 0.5) {
    throw new Error('Something went wrong');
  } else {
    throw 'some error';
  };
};

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log('there was an error....');
  };
};