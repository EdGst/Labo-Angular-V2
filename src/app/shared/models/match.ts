import {MatchResult} from "../../../../../labo-angular-master/labo-angular-master/src/app/shared/models/enums/matchResult";

export interface Match{
  id: number
  tournamentId: string
  blackName?: string
  blackId: string
  whiteName?: string
  whiteId: string
  result: MatchResult
  round: number
}
