import * as type from './TypeAction'
import Match from './Match'
import ListPlayer from '../../Components/Joueurs/data/ListPlayers'
import{ produce} from 'immer';
const inisialeState={
    Joueur:ListPlayer,
    Match:Match,
    MatchTerminer:[],
    winner:""

}
export default function StoreRessource(state=inisialeState,action){
    switch(action.type){
        case type.Add_Match:
        return{...state,Match:[...state.Match,action.playnod]}
        case type.Add_Joueur:
            alert(1)
            return{...state,Joueur:[...state.Joueur,action.playnod]}
        case 'Del_Match':
            const X=produce(state,draftSatet=>{
                draftSatet.Match.splice(action.payload,1)
            })
            return X;


        case 'Add_trmMatch' :

                    return{...state,MatchTerminer:[...state.MatchTerminer,action.payload]}
            
        case 'ChangeWinner':
            return{...state,winner:action.payload}
            
        case "WinnerWinnerChikenDiner":
            state.MatchTerminer.map((e)=>{return e.id_joueur1.id===state.winner || e.id_joueur2.id===state.winner ? e.id_gagnant=state.winner :console.log("sir ntahr")})
        default:
            return state
    }
}
// case type.REMOVE_FRUIT:

//     const X=produce(state,draftSatet=>{

//         const idn=draftSatet.fruits.indexOf(action.payload)

//         draftSatet.fruits.splice(idn,1)

//     })