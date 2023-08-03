import {UserGender} from "../../../../../labo-angular-master/labo-angular-master/src/app/shared/models/enums/userGender";

export interface MemberForm {
  username: string
  email: string
  birthDate: Date
  elo?: number
  gender: UserGender
}
