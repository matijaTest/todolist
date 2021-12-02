# 2.11.2021 Matija
[] !!! Preco ma vsetko pred sebou todo? Je to zbytocne a co je vobec ze TodoRegistration, to je nejaky specialny typ registracie? 
[] !!! Do mena  nedavaj TodoNiecoView.vue staci Nieco.vue lebo uz je jasne ze je to View
[] !! v TodoLoginView.vue mas funkciu redirect ktora sa triggeruje na event loggedIn, v malom kode ju vidis ale ked budes   mat rozsiahlejsie screeny s viac kodu tak sa zacnes v tom ze co vlastne znamena redirect stracat, odporucam teda nazvat metodu menom akcie, kedy sa sputi (onLoggedIn())
    - to iste pre Register (onRegistered())
[] !! Ked vsetko spravne premenujes tak co ma znamenat ze Index.vue? Bude to zobrazovat nejaky index?
[] !! Nemusis davat name: 'nieco' v componentoch ani viewvoch
[] !! Medzi importy a export by som vzdy daval enter, aby to bolo prehladnejsie 
    -```importTheTodoSidebar from "../components/TheTodoSidebar";
    export default {```
[] !! TodoListView.vue je fine ze pouzivas computed ale pre taketo simple veci to dokazes accessnut aj v html priamo ze $route.params.id, nemusis si tam pridavat 3 riadky naviac
[] ! PageNotFound.vue -> 404.vue, kludne simple nazvy, nemusis byt mega popisny
[] ! Ak mas prazdny script alebo style tag tak kludne ho vymaz kym ho nebudes pouzivat
[] ```components: {TheTodoSidebar}``` odporucam tam davam medzery takto { Nieco }, je to prehladnejsie