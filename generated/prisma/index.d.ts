
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model userFeedbacks
 * 
 */
export type userFeedbacks = $Result.DefaultSelection<Prisma.$userFeedbacksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserFeedbacks
 * const userFeedbacks = await prisma.userFeedbacks.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserFeedbacks
   * const userFeedbacks = await prisma.userFeedbacks.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userFeedbacks`: Exposes CRUD operations for the **userFeedbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFeedbacks
    * const userFeedbacks = await prisma.userFeedbacks.findMany()
    * ```
    */
  get userFeedbacks(): Prisma.userFeedbacksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    userFeedbacks: 'userFeedbacks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userFeedbacks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      userFeedbacks: {
        payload: Prisma.$userFeedbacksPayload<ExtArgs>
        fields: Prisma.userFeedbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFeedbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFeedbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          findFirst: {
            args: Prisma.userFeedbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFeedbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          findMany: {
            args: Prisma.userFeedbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>[]
          }
          create: {
            args: Prisma.userFeedbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          createMany: {
            args: Prisma.userFeedbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userFeedbacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>[]
          }
          delete: {
            args: Prisma.userFeedbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          update: {
            args: Prisma.userFeedbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          deleteMany: {
            args: Prisma.userFeedbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userFeedbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userFeedbacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>[]
          }
          upsert: {
            args: Prisma.userFeedbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userFeedbacksPayload>
          }
          aggregate: {
            args: Prisma.UserFeedbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFeedbacks>
          }
          groupBy: {
            args: Prisma.userFeedbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFeedbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.userFeedbacksCountArgs<ExtArgs>
            result: $Utils.Optional<UserFeedbacksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userFeedbacks?: userFeedbacksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model userFeedbacks
   */

  export type AggregateUserFeedbacks = {
    _count: UserFeedbacksCountAggregateOutputType | null
    _avg: UserFeedbacksAvgAggregateOutputType | null
    _sum: UserFeedbacksSumAggregateOutputType | null
    _min: UserFeedbacksMinAggregateOutputType | null
    _max: UserFeedbacksMaxAggregateOutputType | null
  }

  export type UserFeedbacksAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type UserFeedbacksSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type UserFeedbacksMinAggregateOutputType = {
    id: number | null
    goodName: string | null
    feedback: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type UserFeedbacksMaxAggregateOutputType = {
    id: number | null
    goodName: string | null
    feedback: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type UserFeedbacksCountAggregateOutputType = {
    id: number
    goodName: number
    feedback: number
    rating: number
    createdAt: number
    _all: number
  }


  export type UserFeedbacksAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type UserFeedbacksSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type UserFeedbacksMinAggregateInputType = {
    id?: true
    goodName?: true
    feedback?: true
    rating?: true
    createdAt?: true
  }

  export type UserFeedbacksMaxAggregateInputType = {
    id?: true
    goodName?: true
    feedback?: true
    rating?: true
    createdAt?: true
  }

  export type UserFeedbacksCountAggregateInputType = {
    id?: true
    goodName?: true
    feedback?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type UserFeedbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userFeedbacks to aggregate.
     */
    where?: userFeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userFeedbacks to fetch.
     */
    orderBy?: userFeedbacksOrderByWithRelationInput | userFeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userFeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userFeedbacks
    **/
    _count?: true | UserFeedbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFeedbacksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFeedbacksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFeedbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFeedbacksMaxAggregateInputType
  }

  export type GetUserFeedbacksAggregateType<T extends UserFeedbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFeedbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFeedbacks[P]>
      : GetScalarType<T[P], AggregateUserFeedbacks[P]>
  }




  export type userFeedbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userFeedbacksWhereInput
    orderBy?: userFeedbacksOrderByWithAggregationInput | userFeedbacksOrderByWithAggregationInput[]
    by: UserFeedbacksScalarFieldEnum[] | UserFeedbacksScalarFieldEnum
    having?: userFeedbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFeedbacksCountAggregateInputType | true
    _avg?: UserFeedbacksAvgAggregateInputType
    _sum?: UserFeedbacksSumAggregateInputType
    _min?: UserFeedbacksMinAggregateInputType
    _max?: UserFeedbacksMaxAggregateInputType
  }

  export type UserFeedbacksGroupByOutputType = {
    id: number
    goodName: string
    feedback: string
    rating: number | null
    createdAt: Date
    _count: UserFeedbacksCountAggregateOutputType | null
    _avg: UserFeedbacksAvgAggregateOutputType | null
    _sum: UserFeedbacksSumAggregateOutputType | null
    _min: UserFeedbacksMinAggregateOutputType | null
    _max: UserFeedbacksMaxAggregateOutputType | null
  }

  type GetUserFeedbacksGroupByPayload<T extends userFeedbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFeedbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFeedbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFeedbacksGroupByOutputType[P]>
            : GetScalarType<T[P], UserFeedbacksGroupByOutputType[P]>
        }
      >
    >


  export type userFeedbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goodName?: boolean
    feedback?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userFeedbacks"]>

  export type userFeedbacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goodName?: boolean
    feedback?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userFeedbacks"]>

  export type userFeedbacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goodName?: boolean
    feedback?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userFeedbacks"]>

  export type userFeedbacksSelectScalar = {
    id?: boolean
    goodName?: boolean
    feedback?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type userFeedbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "goodName" | "feedback" | "rating" | "createdAt", ExtArgs["result"]["userFeedbacks"]>

  export type $userFeedbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userFeedbacks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      goodName: string
      feedback: string
      rating: number | null
      createdAt: Date
    }, ExtArgs["result"]["userFeedbacks"]>
    composites: {}
  }

  type userFeedbacksGetPayload<S extends boolean | null | undefined | userFeedbacksDefaultArgs> = $Result.GetResult<Prisma.$userFeedbacksPayload, S>

  type userFeedbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFeedbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFeedbacksCountAggregateInputType | true
    }

  export interface userFeedbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userFeedbacks'], meta: { name: 'userFeedbacks' } }
    /**
     * Find zero or one UserFeedbacks that matches the filter.
     * @param {userFeedbacksFindUniqueArgs} args - Arguments to find a UserFeedbacks
     * @example
     * // Get one UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFeedbacksFindUniqueArgs>(args: SelectSubset<T, userFeedbacksFindUniqueArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFeedbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFeedbacksFindUniqueOrThrowArgs} args - Arguments to find a UserFeedbacks
     * @example
     * // Get one UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFeedbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, userFeedbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksFindFirstArgs} args - Arguments to find a UserFeedbacks
     * @example
     * // Get one UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFeedbacksFindFirstArgs>(args?: SelectSubset<T, userFeedbacksFindFirstArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeedbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksFindFirstOrThrowArgs} args - Arguments to find a UserFeedbacks
     * @example
     * // Get one UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFeedbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, userFeedbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findMany()
     * 
     * // Get first 10 UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFeedbacksWithIdOnly = await prisma.userFeedbacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFeedbacksFindManyArgs>(args?: SelectSubset<T, userFeedbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFeedbacks.
     * @param {userFeedbacksCreateArgs} args - Arguments to create a UserFeedbacks.
     * @example
     * // Create one UserFeedbacks
     * const UserFeedbacks = await prisma.userFeedbacks.create({
     *   data: {
     *     // ... data to create a UserFeedbacks
     *   }
     * })
     * 
     */
    create<T extends userFeedbacksCreateArgs>(args: SelectSubset<T, userFeedbacksCreateArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFeedbacks.
     * @param {userFeedbacksCreateManyArgs} args - Arguments to create many UserFeedbacks.
     * @example
     * // Create many UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userFeedbacksCreateManyArgs>(args?: SelectSubset<T, userFeedbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFeedbacks and returns the data saved in the database.
     * @param {userFeedbacksCreateManyAndReturnArgs} args - Arguments to create many UserFeedbacks.
     * @example
     * // Create many UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFeedbacks and only return the `id`
     * const userFeedbacksWithIdOnly = await prisma.userFeedbacks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userFeedbacksCreateManyAndReturnArgs>(args?: SelectSubset<T, userFeedbacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFeedbacks.
     * @param {userFeedbacksDeleteArgs} args - Arguments to delete one UserFeedbacks.
     * @example
     * // Delete one UserFeedbacks
     * const UserFeedbacks = await prisma.userFeedbacks.delete({
     *   where: {
     *     // ... filter to delete one UserFeedbacks
     *   }
     * })
     * 
     */
    delete<T extends userFeedbacksDeleteArgs>(args: SelectSubset<T, userFeedbacksDeleteArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFeedbacks.
     * @param {userFeedbacksUpdateArgs} args - Arguments to update one UserFeedbacks.
     * @example
     * // Update one UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userFeedbacksUpdateArgs>(args: SelectSubset<T, userFeedbacksUpdateArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFeedbacks.
     * @param {userFeedbacksDeleteManyArgs} args - Arguments to filter UserFeedbacks to delete.
     * @example
     * // Delete a few UserFeedbacks
     * const { count } = await prisma.userFeedbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userFeedbacksDeleteManyArgs>(args?: SelectSubset<T, userFeedbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userFeedbacksUpdateManyArgs>(args: SelectSubset<T, userFeedbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeedbacks and returns the data updated in the database.
     * @param {userFeedbacksUpdateManyAndReturnArgs} args - Arguments to update many UserFeedbacks.
     * @example
     * // Update many UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFeedbacks and only return the `id`
     * const userFeedbacksWithIdOnly = await prisma.userFeedbacks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userFeedbacksUpdateManyAndReturnArgs>(args: SelectSubset<T, userFeedbacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFeedbacks.
     * @param {userFeedbacksUpsertArgs} args - Arguments to update or create a UserFeedbacks.
     * @example
     * // Update or create a UserFeedbacks
     * const userFeedbacks = await prisma.userFeedbacks.upsert({
     *   create: {
     *     // ... data to create a UserFeedbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFeedbacks we want to update
     *   }
     * })
     */
    upsert<T extends userFeedbacksUpsertArgs>(args: SelectSubset<T, userFeedbacksUpsertArgs<ExtArgs>>): Prisma__userFeedbacksClient<$Result.GetResult<Prisma.$userFeedbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksCountArgs} args - Arguments to filter UserFeedbacks to count.
     * @example
     * // Count the number of UserFeedbacks
     * const count = await prisma.userFeedbacks.count({
     *   where: {
     *     // ... the filter for the UserFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends userFeedbacksCountArgs>(
      args?: Subset<T, userFeedbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFeedbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFeedbacksAggregateArgs>(args: Subset<T, UserFeedbacksAggregateArgs>): Prisma.PrismaPromise<GetUserFeedbacksAggregateType<T>>

    /**
     * Group by UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFeedbacksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userFeedbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userFeedbacksGroupByArgs['orderBy'] }
        : { orderBy?: userFeedbacksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userFeedbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFeedbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userFeedbacks model
   */
  readonly fields: userFeedbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userFeedbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userFeedbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userFeedbacks model
   */
  interface userFeedbacksFieldRefs {
    readonly id: FieldRef<"userFeedbacks", 'Int'>
    readonly goodName: FieldRef<"userFeedbacks", 'String'>
    readonly feedback: FieldRef<"userFeedbacks", 'String'>
    readonly rating: FieldRef<"userFeedbacks", 'Int'>
    readonly createdAt: FieldRef<"userFeedbacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * userFeedbacks findUnique
   */
  export type userFeedbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which userFeedbacks to fetch.
     */
    where: userFeedbacksWhereUniqueInput
  }

  /**
   * userFeedbacks findUniqueOrThrow
   */
  export type userFeedbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which userFeedbacks to fetch.
     */
    where: userFeedbacksWhereUniqueInput
  }

  /**
   * userFeedbacks findFirst
   */
  export type userFeedbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which userFeedbacks to fetch.
     */
    where?: userFeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userFeedbacks to fetch.
     */
    orderBy?: userFeedbacksOrderByWithRelationInput | userFeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userFeedbacks.
     */
    cursor?: userFeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userFeedbacks.
     */
    distinct?: UserFeedbacksScalarFieldEnum | UserFeedbacksScalarFieldEnum[]
  }

  /**
   * userFeedbacks findFirstOrThrow
   */
  export type userFeedbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which userFeedbacks to fetch.
     */
    where?: userFeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userFeedbacks to fetch.
     */
    orderBy?: userFeedbacksOrderByWithRelationInput | userFeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userFeedbacks.
     */
    cursor?: userFeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userFeedbacks.
     */
    distinct?: UserFeedbacksScalarFieldEnum | UserFeedbacksScalarFieldEnum[]
  }

  /**
   * userFeedbacks findMany
   */
  export type userFeedbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter, which userFeedbacks to fetch.
     */
    where?: userFeedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userFeedbacks to fetch.
     */
    orderBy?: userFeedbacksOrderByWithRelationInput | userFeedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userFeedbacks.
     */
    cursor?: userFeedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userFeedbacks.
     */
    skip?: number
    distinct?: UserFeedbacksScalarFieldEnum | UserFeedbacksScalarFieldEnum[]
  }

  /**
   * userFeedbacks create
   */
  export type userFeedbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * The data needed to create a userFeedbacks.
     */
    data: XOR<userFeedbacksCreateInput, userFeedbacksUncheckedCreateInput>
  }

  /**
   * userFeedbacks createMany
   */
  export type userFeedbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userFeedbacks.
     */
    data: userFeedbacksCreateManyInput | userFeedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userFeedbacks createManyAndReturn
   */
  export type userFeedbacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * The data used to create many userFeedbacks.
     */
    data: userFeedbacksCreateManyInput | userFeedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userFeedbacks update
   */
  export type userFeedbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * The data needed to update a userFeedbacks.
     */
    data: XOR<userFeedbacksUpdateInput, userFeedbacksUncheckedUpdateInput>
    /**
     * Choose, which userFeedbacks to update.
     */
    where: userFeedbacksWhereUniqueInput
  }

  /**
   * userFeedbacks updateMany
   */
  export type userFeedbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userFeedbacks.
     */
    data: XOR<userFeedbacksUpdateManyMutationInput, userFeedbacksUncheckedUpdateManyInput>
    /**
     * Filter which userFeedbacks to update
     */
    where?: userFeedbacksWhereInput
    /**
     * Limit how many userFeedbacks to update.
     */
    limit?: number
  }

  /**
   * userFeedbacks updateManyAndReturn
   */
  export type userFeedbacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * The data used to update userFeedbacks.
     */
    data: XOR<userFeedbacksUpdateManyMutationInput, userFeedbacksUncheckedUpdateManyInput>
    /**
     * Filter which userFeedbacks to update
     */
    where?: userFeedbacksWhereInput
    /**
     * Limit how many userFeedbacks to update.
     */
    limit?: number
  }

  /**
   * userFeedbacks upsert
   */
  export type userFeedbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * The filter to search for the userFeedbacks to update in case it exists.
     */
    where: userFeedbacksWhereUniqueInput
    /**
     * In case the userFeedbacks found by the `where` argument doesn't exist, create a new userFeedbacks with this data.
     */
    create: XOR<userFeedbacksCreateInput, userFeedbacksUncheckedCreateInput>
    /**
     * In case the userFeedbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userFeedbacksUpdateInput, userFeedbacksUncheckedUpdateInput>
  }

  /**
   * userFeedbacks delete
   */
  export type userFeedbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
    /**
     * Filter which userFeedbacks to delete.
     */
    where: userFeedbacksWhereUniqueInput
  }

  /**
   * userFeedbacks deleteMany
   */
  export type userFeedbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userFeedbacks to delete
     */
    where?: userFeedbacksWhereInput
    /**
     * Limit how many userFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * userFeedbacks without action
   */
  export type userFeedbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userFeedbacks
     */
    select?: userFeedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userFeedbacks
     */
    omit?: userFeedbacksOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserFeedbacksScalarFieldEnum: {
    id: 'id',
    goodName: 'goodName',
    feedback: 'feedback',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type UserFeedbacksScalarFieldEnum = (typeof UserFeedbacksScalarFieldEnum)[keyof typeof UserFeedbacksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userFeedbacksWhereInput = {
    AND?: userFeedbacksWhereInput | userFeedbacksWhereInput[]
    OR?: userFeedbacksWhereInput[]
    NOT?: userFeedbacksWhereInput | userFeedbacksWhereInput[]
    id?: IntFilter<"userFeedbacks"> | number
    goodName?: StringFilter<"userFeedbacks"> | string
    feedback?: StringFilter<"userFeedbacks"> | string
    rating?: IntNullableFilter<"userFeedbacks"> | number | null
    createdAt?: DateTimeFilter<"userFeedbacks"> | Date | string
  }

  export type userFeedbacksOrderByWithRelationInput = {
    id?: SortOrder
    goodName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type userFeedbacksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userFeedbacksWhereInput | userFeedbacksWhereInput[]
    OR?: userFeedbacksWhereInput[]
    NOT?: userFeedbacksWhereInput | userFeedbacksWhereInput[]
    goodName?: StringFilter<"userFeedbacks"> | string
    feedback?: StringFilter<"userFeedbacks"> | string
    rating?: IntNullableFilter<"userFeedbacks"> | number | null
    createdAt?: DateTimeFilter<"userFeedbacks"> | Date | string
  }, "id">

  export type userFeedbacksOrderByWithAggregationInput = {
    id?: SortOrder
    goodName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: userFeedbacksCountOrderByAggregateInput
    _avg?: userFeedbacksAvgOrderByAggregateInput
    _max?: userFeedbacksMaxOrderByAggregateInput
    _min?: userFeedbacksMinOrderByAggregateInput
    _sum?: userFeedbacksSumOrderByAggregateInput
  }

  export type userFeedbacksScalarWhereWithAggregatesInput = {
    AND?: userFeedbacksScalarWhereWithAggregatesInput | userFeedbacksScalarWhereWithAggregatesInput[]
    OR?: userFeedbacksScalarWhereWithAggregatesInput[]
    NOT?: userFeedbacksScalarWhereWithAggregatesInput | userFeedbacksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userFeedbacks"> | number
    goodName?: StringWithAggregatesFilter<"userFeedbacks"> | string
    feedback?: StringWithAggregatesFilter<"userFeedbacks"> | string
    rating?: IntNullableWithAggregatesFilter<"userFeedbacks"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"userFeedbacks"> | Date | string
  }

  export type userFeedbacksCreateInput = {
    goodName: string
    feedback: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type userFeedbacksUncheckedCreateInput = {
    id?: number
    goodName: string
    feedback: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type userFeedbacksUpdateInput = {
    goodName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userFeedbacksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userFeedbacksCreateManyInput = {
    id?: number
    goodName: string
    feedback: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type userFeedbacksUpdateManyMutationInput = {
    goodName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userFeedbacksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    goodName?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userFeedbacksCountOrderByAggregateInput = {
    id?: SortOrder
    goodName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type userFeedbacksAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type userFeedbacksMaxOrderByAggregateInput = {
    id?: SortOrder
    goodName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type userFeedbacksMinOrderByAggregateInput = {
    id?: SortOrder
    goodName?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type userFeedbacksSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}