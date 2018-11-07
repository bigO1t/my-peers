export class IdentityService {
  identity<T>(type: T): string {
    return type.constructor.name;
  }
}
