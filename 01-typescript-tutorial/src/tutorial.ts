enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
};

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  };
});

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = 'Value',
}

let numericEnumValue: NumericEnum = 1;
console.log(numericEnumValue); 

// let stringEnumValue: StringEnum = 'Value'; 
// console.log(stringEnumValue);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
};

function getServerResponse(): ServerResponse {
  return {
    // result: 200,
    // result: 'Success',
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
};

const response: ServerResponse = getServerResponse();
console.log(response);