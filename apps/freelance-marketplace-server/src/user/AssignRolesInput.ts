import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumUserRole } from "./base/EnumUserRole";

@ArgsType()
class AssignRolesInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => EnumUserRole)
    @ApiProperty({
        required: true,
        enum: EnumUserRole
    })
    @Type(() => EnumUserRole)
    role!: EnumUserRole;
}

export { AssignRolesInput as AssignRolesInput };