export async function load({ fetch }) {
    // get all filenames in the static/problems folder
    let problems = await import.meta.glob('/static/problems/*.json');


    let problemsJson = {};

    // read each file and parse the json
    for (let path of Object.keys(problems)) {
        // remove /static from path
        path = path.replace('/static', '');
        let res = await fetch(path);
        let data = await res.json();
        problemsJson[path] = data;
    }

    return {
        problems: problemsJson
    };
}