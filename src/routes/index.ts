import { CandidatoRoutes } from './candidato';
import { ElectorRoutes } from './elector';
import { VotacionRoutes } from './votacion';

export class Routes {
    public candidatoRoutes: CandidatoRoutes = new CandidatoRoutes();
    public electorRoutes: ElectorRoutes = new ElectorRoutes();
    public votacioncontroller: VotacionRoutes = new VotacionRoutes();
}