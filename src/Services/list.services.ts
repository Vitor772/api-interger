import http from "../http-common";
import ITutorialData from "../types/tutorial.type"

class ListDataService {
    getAll() {
        return http.get<Array<ITutorialData>>("/list-view");
      }

      get(id: string){
          return http.get<ITutorialData>(``)
      }

}


export default new ListDataService();