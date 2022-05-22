/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 */
import * as thrift from '@creditkarma/thrift-server-core';
import * as AddRequest from './AddRequest';
export const serviceName: string = 'Calculator';
export const annotations: thrift.IThriftAnnotations = {};
export const methodAnnotations: thrift.IMethodAnnotations = {
  add: {
    annotations: {},
    fieldAnnotations: {},
  },
  subtract: {
    annotations: {},
    fieldAnnotations: {},
  },
};
export const methodNames: Array<string> = ['add', 'subtract'];
export const methodParameters: {
  [methodName: string]: number;
} = {
  add: 2,
  subtract: 3,
};
export interface IAdd__Args {
  request: AddRequest.IAddRequest;
}
export interface IAdd__ArgsArgs {
  request: AddRequest.IAddRequestArgs;
}
export const Add__ArgsCodec: thrift.IStructCodec<IAdd__ArgsArgs, IAdd__Args> = {
  encode(args: IAdd__ArgsArgs, output: thrift.TProtocol): void {
    const obj: any = {
      request: args.request,
    };
    output.writeStructBegin('Add__Args');
    if (obj.request != null) {
      output.writeFieldBegin('request', thrift.TType.STRUCT, 1);
      AddRequest.AddRequestCodec.encode(obj.request, output);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[request] is unset!');
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IAdd__Args {
    let _args: any = {};
    input.readStructBegin();
    while (true) {
      const ret: thrift.IThriftField = input.readFieldBegin();
      const fieldType: thrift.TType = ret.fieldType;
      const fieldId: number = ret.fieldId;
      if (fieldType === thrift.TType.STOP) {
        break;
      }
      switch (fieldId) {
        case 1:
          if (fieldType === thrift.TType.STRUCT) {
            const value_1: AddRequest.IAddRequest = AddRequest.AddRequestCodec.decode(input);
            _args.request = value_1;
          } else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    if (_args.request !== undefined) {
      return {
        request: _args.request,
      };
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Unable to read Add__Args from input');
    }
  },
};
export class Add__Args extends thrift.StructLike implements IAdd__Args {
  public request: AddRequest.IAddRequest;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IAdd__ArgsArgs) {
    super();
    if (args.request != null) {
      const value_2: AddRequest.IAddRequest = new AddRequest.AddRequest(args.request);
      this.request = value_2;
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[request] is unset!');
    }
  }
  public static read(input: thrift.TProtocol): Add__Args {
    return new Add__Args(Add__ArgsCodec.decode(input));
  }
  public static write(args: IAdd__ArgsArgs, output: thrift.TProtocol): void {
    return Add__ArgsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return Add__ArgsCodec.encode(this, output);
  }
}
export interface ISubtract__Args {
  left: number;
  right: number;
}
export interface ISubtract__ArgsArgs {
  left: number;
  right: number;
}
export const Subtract__ArgsCodec: thrift.IStructCodec<ISubtract__ArgsArgs, ISubtract__Args> = {
  encode(args: ISubtract__ArgsArgs, output: thrift.TProtocol): void {
    const obj: any = {
      left: args.left,
      right: args.right,
    };
    output.writeStructBegin('Subtract__Args');
    if (obj.left != null) {
      output.writeFieldBegin('left', thrift.TType.I32, 1);
      output.writeI32(obj.left);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[left] is unset!');
    }
    if (obj.right != null) {
      output.writeFieldBegin('right', thrift.TType.I32, 2);
      output.writeI32(obj.right);
      output.writeFieldEnd();
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[right] is unset!');
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ISubtract__Args {
    let _args: any = {};
    input.readStructBegin();
    while (true) {
      const ret: thrift.IThriftField = input.readFieldBegin();
      const fieldType: thrift.TType = ret.fieldType;
      const fieldId: number = ret.fieldId;
      if (fieldType === thrift.TType.STOP) {
        break;
      }
      switch (fieldId) {
        case 1:
          if (fieldType === thrift.TType.I32) {
            const value_3: number = input.readI32();
            _args.left = value_3;
          } else {
            input.skip(fieldType);
          }
          break;
        case 2:
          if (fieldType === thrift.TType.I32) {
            const value_4: number = input.readI32();
            _args.right = value_4;
          } else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    if (_args.left !== undefined && _args.right !== undefined) {
      return {
        left: _args.left,
        right: _args.right,
      };
    } else {
      throw new thrift.TProtocolException(
        thrift.TProtocolExceptionType.UNKNOWN,
        'Unable to read Subtract__Args from input'
      );
    }
  },
};
export class Subtract__Args extends thrift.StructLike implements ISubtract__Args {
  public left: number;
  public right: number;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ISubtract__ArgsArgs) {
    super();
    if (args.left != null) {
      const value_5: number = args.left;
      this.left = value_5;
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[left] is unset!');
    }
    if (args.right != null) {
      const value_6: number = args.right;
      this.right = value_6;
    } else {
      throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, 'Required field[right] is unset!');
    }
  }
  public static read(input: thrift.TProtocol): Subtract__Args {
    return new Subtract__Args(Subtract__ArgsCodec.decode(input));
  }
  public static write(args: ISubtract__ArgsArgs, output: thrift.TProtocol): void {
    return Subtract__ArgsCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return Subtract__ArgsCodec.encode(this, output);
  }
}
export interface IAdd__Result {
  success?: number;
}
export interface IAdd__ResultArgs {
  success?: number;
}
export const Add__ResultCodec: thrift.IStructCodec<IAdd__ResultArgs, IAdd__Result> = {
  encode(args: IAdd__ResultArgs, output: thrift.TProtocol): void {
    const obj: any = {
      success: args.success,
    };
    output.writeStructBegin('Add__Result');
    if (obj.success != null) {
      output.writeFieldBegin('success', thrift.TType.I32, 0);
      output.writeI32(obj.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): IAdd__Result {
    let _args: any = {};
    input.readStructBegin();
    while (true) {
      const ret: thrift.IThriftField = input.readFieldBegin();
      const fieldType: thrift.TType = ret.fieldType;
      const fieldId: number = ret.fieldId;
      if (fieldType === thrift.TType.STOP) {
        break;
      }
      switch (fieldId) {
        case 0:
          if (fieldType === thrift.TType.I32) {
            const value_7: number = input.readI32();
            _args.success = value_7;
          } else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return {
      success: _args.success,
    };
  },
};
export class Add__Result extends thrift.StructLike implements IAdd__Result {
  public success?: number;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: IAdd__ResultArgs = {}) {
    super();
    if (args.success != null) {
      const value_8: number = args.success;
      this.success = value_8;
    }
  }
  public static read(input: thrift.TProtocol): Add__Result {
    return new Add__Result(Add__ResultCodec.decode(input));
  }
  public static write(args: IAdd__ResultArgs, output: thrift.TProtocol): void {
    return Add__ResultCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return Add__ResultCodec.encode(this, output);
  }
}
export interface ISubtract__Result {
  success?: number;
}
export interface ISubtract__ResultArgs {
  success?: number;
}
export const Subtract__ResultCodec: thrift.IStructCodec<ISubtract__ResultArgs, ISubtract__Result> = {
  encode(args: ISubtract__ResultArgs, output: thrift.TProtocol): void {
    const obj: any = {
      success: args.success,
    };
    output.writeStructBegin('Subtract__Result');
    if (obj.success != null) {
      output.writeFieldBegin('success', thrift.TType.I32, 0);
      output.writeI32(obj.success);
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  },
  decode(input: thrift.TProtocol): ISubtract__Result {
    let _args: any = {};
    input.readStructBegin();
    while (true) {
      const ret: thrift.IThriftField = input.readFieldBegin();
      const fieldType: thrift.TType = ret.fieldType;
      const fieldId: number = ret.fieldId;
      if (fieldType === thrift.TType.STOP) {
        break;
      }
      switch (fieldId) {
        case 0:
          if (fieldType === thrift.TType.I32) {
            const value_9: number = input.readI32();
            _args.success = value_9;
          } else {
            input.skip(fieldType);
          }
          break;
        default: {
          input.skip(fieldType);
        }
      }
      input.readFieldEnd();
    }
    input.readStructEnd();
    return {
      success: _args.success,
    };
  },
};
export class Subtract__Result extends thrift.StructLike implements ISubtract__Result {
  public success?: number;
  public readonly _annotations: thrift.IThriftAnnotations = {};
  public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
  constructor(args: ISubtract__ResultArgs = {}) {
    super();
    if (args.success != null) {
      const value_10: number = args.success;
      this.success = value_10;
    }
  }
  public static read(input: thrift.TProtocol): Subtract__Result {
    return new Subtract__Result(Subtract__ResultCodec.decode(input));
  }
  public static write(args: ISubtract__ResultArgs, output: thrift.TProtocol): void {
    return Subtract__ResultCodec.encode(args, output);
  }
  public write(output: thrift.TProtocol): void {
    return Subtract__ResultCodec.encode(this, output);
  }
}
export class Client<Context = any> extends thrift.ThriftClient<Context> {
  public static readonly serviceName: string = serviceName;
  public static readonly annotations: thrift.IThriftAnnotations = annotations;
  public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
  public static readonly methodNames: Array<string> = methodNames;
  public readonly _serviceName: string = serviceName;
  public readonly _annotations: thrift.IThriftAnnotations = annotations;
  public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
  public readonly _methodNames: Array<string> = methodNames;
  public readonly _methodParameters?: {
    [methodName: string]: number;
  } = methodParameters;
  public add(request: AddRequest.IAddRequestArgs, context?: Context): Promise<number> {
    const writer: thrift.TTransport = new this.transport();
    const output: thrift.TProtocol = new this.protocol(writer);
    output.writeMessageBegin('add', thrift.MessageType.CALL, this.incrementRequestId());
    const args: IAdd__ArgsArgs = { request };
    Add__ArgsCodec.encode(args, output);
    output.writeMessageEnd();
    return this.connection.send(writer.flush(), context).then((data: Buffer) => {
      const reader: thrift.TTransport = this.transport.receiver(data);
      const input: thrift.TProtocol = new this.protocol(reader);
      try {
        const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
        if (fieldName === 'add') {
          if (messageType === thrift.MessageType.EXCEPTION) {
            const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
            input.readMessageEnd();
            return Promise.reject(err);
          } else {
            const result: IAdd__Result = Add__ResultCodec.decode(input);
            input.readMessageEnd();
            if (result.success != null) {
              return Promise.resolve(result.success);
            } else {
              return Promise.reject(
                new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, 'add failed: unknown result')
              );
            }
          }
        } else {
          return Promise.reject(
            new thrift.TApplicationException(
              thrift.TApplicationExceptionType.WRONG_METHOD_NAME,
              'Received a response to an unknown RPC function: ' + fieldName
            )
          );
        }
      } catch (err) {
        return Promise.reject(err);
      }
    });
  }
  public subtract(left: number, right: number, context?: Context): Promise<number> {
    const writer: thrift.TTransport = new this.transport();
    const output: thrift.TProtocol = new this.protocol(writer);
    output.writeMessageBegin('subtract', thrift.MessageType.CALL, this.incrementRequestId());
    const args: ISubtract__ArgsArgs = { left, right };
    Subtract__ArgsCodec.encode(args, output);
    output.writeMessageEnd();
    return this.connection.send(writer.flush(), context).then((data: Buffer) => {
      const reader: thrift.TTransport = this.transport.receiver(data);
      const input: thrift.TProtocol = new this.protocol(reader);
      try {
        const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
        if (fieldName === 'subtract') {
          if (messageType === thrift.MessageType.EXCEPTION) {
            const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
            input.readMessageEnd();
            return Promise.reject(err);
          } else {
            const result: ISubtract__Result = Subtract__ResultCodec.decode(input);
            input.readMessageEnd();
            if (result.success != null) {
              return Promise.resolve(result.success);
            } else {
              return Promise.reject(
                new thrift.TApplicationException(
                  thrift.TApplicationExceptionType.UNKNOWN,
                  'subtract failed: unknown result'
                )
              );
            }
          }
        } else {
          return Promise.reject(
            new thrift.TApplicationException(
              thrift.TApplicationExceptionType.WRONG_METHOD_NAME,
              'Received a response to an unknown RPC function: ' + fieldName
            )
          );
        }
      } catch (err) {
        return Promise.reject(err);
      }
    });
  }
}
export interface IHandler<Context = any> {
  add(request: AddRequest.IAddRequest, context?: Context): number | Promise<number>;
  subtract(left: number, right: number, context?: Context): number | Promise<number>;
}
export class Processor<Context = any> extends thrift.ThriftProcessor<Context, IHandler<Context>> {
  protected readonly _handler: IHandler<Context>;
  public static readonly serviceName: string = serviceName;
  public static readonly annotations: thrift.IThriftAnnotations = annotations;
  public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
  public static readonly methodNames: Array<string> = methodNames;
  public readonly _serviceName: string = serviceName;
  public readonly _annotations: thrift.IThriftAnnotations = annotations;
  public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
  public readonly _methodNames: Array<string> = methodNames;
  constructor(handler: IHandler<Context>) {
    super();
    this._handler = handler;
  }
  public process(input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject): void => {
      const metadata: thrift.IThriftMessage = input.readMessageBegin();
      const fieldName: string = metadata.fieldName;
      const requestId: number = metadata.requestId;
      const methodName: string = 'process_' + fieldName;
      switch (methodName) {
        case 'process_add': {
          resolve(this.process_add(requestId, input, output, context));
          break;
        }
        case 'process_subtract': {
          resolve(this.process_subtract(requestId, input, output, context));
          break;
        }
        default: {
          input.skip(thrift.TType.STRUCT);
          input.readMessageEnd();
          const errMessage = 'Unknown function ' + fieldName;
          const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
          output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
          thrift.TApplicationExceptionCodec.encode(err, output);
          output.writeMessageEnd();
          resolve(output.flush());
          break;
        }
      }
    });
  }
  public process_add(
    requestId: number,
    input: thrift.TProtocol,
    output: thrift.TProtocol,
    context: Context
  ): Promise<Buffer> {
    return new Promise<number>((resolve, reject): void => {
      try {
        const args: IAdd__Args = Add__ArgsCodec.decode(input);
        input.readMessageEnd();
        resolve(this._handler.add(args.request, context));
      } catch (err) {
        reject(err);
      }
    })
      .then((data: number): Buffer => {
        const result: IAdd__ResultArgs = { success: data };
        output.writeMessageBegin('add', thrift.MessageType.REPLY, requestId);
        Add__ResultCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
      })
      .catch((err: Error): Buffer => {
        const result: thrift.TApplicationException = new thrift.TApplicationException(
          thrift.TApplicationExceptionType.UNKNOWN,
          err.message
        );
        output.writeMessageBegin('add', thrift.MessageType.EXCEPTION, requestId);
        thrift.TApplicationExceptionCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
      });
  }
  public process_subtract(
    requestId: number,
    input: thrift.TProtocol,
    output: thrift.TProtocol,
    context: Context
  ): Promise<Buffer> {
    return new Promise<number>((resolve, reject): void => {
      try {
        const args: ISubtract__Args = Subtract__ArgsCodec.decode(input);
        input.readMessageEnd();
        resolve(this._handler.subtract(args.left, args.right, context));
      } catch (err) {
        reject(err);
      }
    })
      .then((data: number): Buffer => {
        const result: ISubtract__ResultArgs = { success: data };
        output.writeMessageBegin('subtract', thrift.MessageType.REPLY, requestId);
        Subtract__ResultCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
      })
      .catch((err: Error): Buffer => {
        const result: thrift.TApplicationException = new thrift.TApplicationException(
          thrift.TApplicationExceptionType.UNKNOWN,
          err.message
        );
        output.writeMessageBegin('subtract', thrift.MessageType.EXCEPTION, requestId);
        thrift.TApplicationExceptionCodec.encode(result, output);
        output.writeMessageEnd();
        return output.flush();
      });
  }
}
