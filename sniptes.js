//Get copy.ai all results

let all_t = document.querySelectorAll('.max-w-3xl [data-testid="generation-result"] pre');
let get_txt = '';
for (let name of all_t) {
    get_txt += name.innerText."|||";
}
