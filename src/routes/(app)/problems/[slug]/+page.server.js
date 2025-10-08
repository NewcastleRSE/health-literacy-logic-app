import {error} from '@sveltejs/kit';

export async function load({params, parent}) {

    let data = await parent();
    let problems = await data.problems;
    
    // find the problem with the matching slug
    let problem = Object.values(problems).find(p => p.id === params.slug);

    if (!problem) {
        error(404, {message: 'Not found'});
    }


    return {
        problem,
    }
}