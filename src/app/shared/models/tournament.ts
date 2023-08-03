import {TournamentCategory} from "../../../../../labo-angular-master/labo-angular-master/src/app/shared/models/enums/tournamentCategory";
import {TournamentStatus} from "../../../../../labo-angular-master/labo-angular-master/src/app/shared/models/enums/tournamentStatus";

export interface Tournament {
  id: string
  name?: string
  location?: string
  minPlayers: number
  maxPlayers: number
  eloMin?: number
  eloMax?: number
  categories?: TournamentCategory[]
  womenOnly: boolean
  endOfRegistration: Date
  count: number
  canRegister: boolean
  isRegistered: boolean
  status: TournamentStatus
  currentRound: number
}
