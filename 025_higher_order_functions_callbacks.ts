var dbQuery = function() : void {
   setTimeout(
       () => {
        console.log('Query Results')
       }, 3000
   ); 
}

function loadPage(q: () => void) {
    console.log('header import');
    q();
    console.log('sidebar import');
    console.log('footer import');
}

loadPage(dbQuery);