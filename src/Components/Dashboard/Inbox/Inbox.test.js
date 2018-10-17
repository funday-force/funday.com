const funcs = require("../../../utilities/functions");
const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");

let mock = new MockAdapter(axios);
mock.onAny('/api/messages/1').reply(200, {
  message: "Hello there"
})
console.log(funcs)


/////////////// JACES TEST CODES /////////////////////
describe("Update message", () => {
  test("should update message", () => {
    return funcs.updateMessage("/api/messages/1").then(data => {
      console.log(data)
      if(typeof data === "object")
      return data;

      expect(data).toEqual('object')
    })
  })
})
describe("Update message", () => {
  test("should update message", () => {
    return funcs.updateMessage("/api/messages/1").then(data => {
      console.log(data)
      if(typeof data === "string")
      expect(mock.onAny).toHaveBeenCalledWith('/api/messages/1')
      return data;
    })
  })
})
describe("Update message", () => {
  test("should update message", () => {
    return funcs.updateMessage("/api/messages/1").then(data => {
      console.log(data)
      if(typeof data === "string")
      expect(mock.onAny).toBeFalsy()
      return data;
    })
  })
})
describe("Update message", () => {
  test("should update message", () => {
    return funcs.updateMessage("/api/messages/1").then(data => {
      console.log(data)
      if(typeof data === "string")
      expect(mock.onAny).toBeTruthy()
      return data;
    })
  })
})
describe("Update message", () => {
  test("should update message", () => {
    return funcs.updateMessage("/api/messages/1").then(data => {
      console.log(data)
      if(typeof data === "string")
      expect(mock.onAny).toEqual('')
      return data;
    })
  })
})
//////////////////////////
// TESSAS TEST - NOT TESSAS
describe("handleInput method", () => {
  test("should return same string", () => {
    let result = funcs.handleMessageInput("Tessa");
    expect(result).toBe("Tessa");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleMessageInput("value");
    expect(typeof result).toBe("string");
  });
});

describe("inputHanlde method", () => {
  test("should not be a number", () => {
    let result = funcs.handleMessageInput("value");
    expect(typeof result).not.toBe("number");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleMessageInput("value");
    expect(typeof result).toBe("string");
  });
});

describe("inputHanlde method", () => {
  test("should return a string", () => {
    let result = funcs.handleMessageInput("value");
    expect(result).toMatch("value");
  });
});

describe("deleteMessage method", () => {
  test("should delete message", () => {
    funcs.deleteMessage("http://localhost:3010/api/messages/1").then(data => {
      return data;
    });
  });
});

mock.onGet("http://localhost:3010/api/messages/1").reply(200, {
  message: "Hello there"
});
