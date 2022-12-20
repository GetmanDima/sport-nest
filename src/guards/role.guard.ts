import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private role: string) {}

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();
    console.log(request.user.type, this.role);
    if (this.role !== request.user.type) {
      throw new ForbiddenException();
    }

    return true
  }
}
