export const cloneDeep = (obj) => {
  if (!obj || typeof obj !== "object") return obj;

  var retObj = {};

  for (var attr in obj) {
    var type = obj[attr];

    switch (true) {
      case (type instanceof Date):
        var _d = new Date();
        _d.setDate(type.getDate())
        retObj[attr] = _d;
        break;

      case (type instanceof Function):
        retObj[attr] = obj[attr];
        break;

      case (type instanceof Array):
        var _a = [];
        for (var e of type) {
          //_a.push(e);
          _a.push(cloneDeep(e));
        }
        retObj[attr] = _a;
        break;

      case (type instanceof Object):
        var _o = {};
        for (var e in type) {
          //_o[e] = type[e];
          _o[e] = cloneDeep(type[e]);
        }
        retObj[attr] = _o;
        break;

      default:
        retObj[attr] = obj[attr];
    }
  }
  return retObj;
}

export const clone = (object) => {
  if (!object || typeof object !== 'object') {
    return object
  }

  const element = []

  for (let i = 0; i < object.length; i++) {
    element.push(Object.assign({},  object[i]))
  }

  return element
}

export const isEmpty = (value) => {
  if (value === undefined || value === null) {
    return true
  }

  if (typeof value === 'string') {
    return value.length === 0
  }

  if (typeof value === 'number') {
    return value === 0
  }

  if (typeof value === 'object') {
    return Object.values(value).length === 0
  }

}