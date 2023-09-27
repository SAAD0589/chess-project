import * as type from './TypeAction'

export function Add_Match(id,date,id_joueur1,id_joueur2,score,id_gagnant) {
    console.log(id,date,id_joueur1,id_joueur2,score)
  return ({
        type:type.Add_Match,
        playnod:{id,date,id_joueur1,id_joueur2,score,id_gagnant}
  }
  )
}
export function Add_Joueur(id,FullName,age,sexe,nationality,score,image) {
return ({
      type:type.Add_Joueur,
      playnod:{id:id,FullName:FullName,age:age,sexe:sexe,nationality:nationality,score:score,image:image}
}
)
}
export function Del_Match(AddedMatches) {
return ({
      type:"Del_Match",
      payload:AddedMatches,
      
}
)
}
export function Add_trmMatch(match) {
return ({
      type:"Add_trmMatch",
      payload:match
}
)
}
export function ChangeWinner(theChosedOne) {
return ({
      type:"ChangeWinner",
      payload:theChosedOne
}
)
}
export function WinnerWinnerChikenDiner() {
return ({
      type:"WinnerWinnerChikenDiner",

}
)
}
// export function Ajt_id_gagnant(id) {
// return ({
//       type:"Ajt_id_gagnant",
//       payload:id,
      
// }
// )
// }

