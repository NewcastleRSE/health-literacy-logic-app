1. [Website architecture](#website-architecture)
1. [Making changes](#making-changes)
    1. [(Create a new branch)](#create-a-new-branch)
    1. [Editing the file](#editing-the-file)
    1. [Making a pull request](#making-a-pull-request)
    1. [Merging](#merging)
    1. [Automatic deployment](#automatic-deployment)
1. [Making changes to the About page](#making-changes-to-the-about-page)
1. [Making changes to the model](#making-changes-to-the-model)

## Website architecture
The entirety of the website's content and code is available [on this repository](https://github.com/NewcastleRSE/health-literacy-logic-app). The website was built with [Svelte](https://svelte.dev/) and is published with [Github Pages](https://docs.github.com/en/pages), using an automated workflow. The workflow that publishes the website is triggered everytime a new change is pushed to the `dev` branch.

For more on Github, [see this document](./10_GitHub_Concepts/10_github_concepts.md)

The content of the website is available in two major locations:
1. The about page: [`/src/routes/(app)/about/content.md`](/src/routes/(app)/about/content.md)
1. The model: [`/static/problems/`](/static/problems/) (divided into individual `json` files)

Editing the website will mostly consist of editing either of these locations.

## Making changes

In making changes to the website, you should follow these steps:

### (Create a new branch)

Creating a new branch is not strictly necessary, although it is recommended if you are making a batch of changes in one go. If you don't create the branch before making a change, Github will likely ask you whether you'd like to create a branch on committing your first change. To create a new branch *before* making a change:

1. Ensure you are logged in to github
1. Go to the [root of the repository](https://github.com/NewcastleRSE/health-literacy-logic-app)
1. On the top left of the screen, just below the title of the repository, there is a dropdown button to select the current branch (normally, that would be dev)
1. Press the button and type the name of the new branch in the input box, then click the message below that says `create branch XYZ from branch dev`

### Editing the file

1. Navigate to the location of the file you want to edit and open it.
1. On the top right of the screen, click the pencil icon (edit).
1. Edit the file as required.
1. Once you're finished, press the green `Commit changes...` button on the top right of the screen.
1. Add a commit message that explains your change, if necessary
1. (If you haven't created a new branch yet, github might suggest creating a new branch now)
1. Click the green `Propose changes` button

### Making a pull request

After making your changes, it's time to merge them to the main website. We start this process by making a [pull request](./10_GitHub_Concepts/10_github_concepts.md#pull-request):

1. From the [root of the repository](https://github.com/NewcastleRSE/health-literacy-logic-app), click the `Pull Requests` tab at the top of the page.
1. Click the green `New Pull Request` button on the top right of the screen
1. Select the branch that contains your changes in the dropdown box on the right hand side: it should look like `dev <- new-branch`, meaning you are merging the changes of `new-branch` into `dev`.
1. Click `Create pull request`
1. Add any details you want about the changes in the new branch.
1. Click `Create pull request` at the bottom of the page.

### Merging
1. If everything worked well, you should see a `Merge pull request` button; you might also see something along the lines of `Bypass branch protection and merge`, if the repository is configured to require a review before merging. Feel free to bypass the protection if you are only making a change to content.
1. Once the merge is complete, you may delete the branch

### Automatic deployment

If all went well, merging the pull request should have triggered an action to publish the website with the new changes. You should be able whether the action was successful by clicking in the `Actions` tab on the top of the screen. The top action on the list should be the one triggered by your changes, and it should display a green tick after a few minutes. This means the changes will be visible on [the website](https://newcastlerse.github.io/health-literacy-logic-app/)

## Making changes to the About page

The content of the about page is a simple Markdown file, i.e., plain text that can contain some simple formatting. [Here's a handy Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

To make changes to the About page simply [edit this file](/src/routes/(app)/about/content.md) as described above.

## Making changes to the model

The model is divided into individual problems, each with its own `json` file in [this directory](/static/problems/). To edit a problem in the model, edit the corresponding `json` file.

[JSON](https://en.wikipedia.org/wiki/JSON) is a structured, plain-text data structure that allows for information to be both machine and human-readable.

In the case of the logic model, each problem consists of three nested groups of sections (one for each level). Mostly, what you are likely to need to edit are lines that start with
```json
"content": [
    "..."
]
```
which should correspond to visible text on the website.

If you are adding a new line to a list of existing lines, make sure that you separate the new line from the previous one with a comma, like so:
```json
"content": [
    "old line",
    "new line"
]
```

