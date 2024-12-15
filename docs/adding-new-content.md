# Adding New Content

I have designed the process for creating a new "work" to add to the list and to have its own page, to add a "press" entry or "news" entry, among other entries on the site, to be as simple as possible. Each of these categories (works, press, news, blogs) have their own folders and each separate entity (like a news clipping) has its own file. So, if you want to add a new work to your website, all you need to do is create a new file in the works content folder. The links to all of the proper folders are below, but they all live inside of [src/content/](https://github.com/fdiengott/tyler-taylor-composer/tree/main/src/content).

## Foundation

The code for this website is hosted on github, meaning when the code changes, the website itself will change, but only in certain circumstances. How do I mean? When using git, the technology that github builds off of, there is the concept of "branches". Each branch is a different version of all of the code and branches can be made at will. The branch that is actually on the website is the `main` branch. Files should never be added directly to this branch as you might break the site by accident. Instead, we create files in a separate branch so that we can see a preview of the website with the new changes before it goes live to the public at tylertaylorcomposer.com. Once everything is confirmed as looking good and hasn't broken anything, we then "merge" the latest changes of into `main`! I'll explain how to do all of this below. Luckliy it's pretty straightforward once you do it once.

## Where to create files

If you want to create an entry for any of the following entities, do so in the following folders.

| Entity | content location                                                               |
| ------ | ------------------------------------------------------------------------------ |
| works  | https://github.com/fdiengott/tyler-taylor-composer/tree/main/src/content/works |
| blogs  | https://github.com/fdiengott/tyler-taylor-composer/tree/main/src/content/blogs |
| news   | https://github.com/fdiengott/tyler-taylor-composer/tree/main/src/content/news  |
| press  | https://github.com/fdiengott/tyler-taylor-composer/tree/main/src/content/press |

## How to create files

Once you're in the right folder, note at the top right that there is a button labeled "Add file". Click on that and then click "Create new file".

Title this file whatever you'd like, but with hyphens instead of spaces, followed by `.md` for markdown (e.g. rite-of-spring.md). I'd advise for works to use the name of the piece as I have for the others. It's good for SEO (search engine optimization aka making it easier for google to find your pages). For news and press, I don't think the name matters that much as long as it's unique. `news-1.md` is probably what I'd suggest since they might not have obvious names.

Once you've finished writing the file, click the button "Commit changes..." (AND THIS NEXT PART IS CRUCIAL!) click on "Create a new branch for this commit and start a pull request". This is the way to create a preview for your changes. It doesn't matter the name of the pull request (as long as it has no spaces and is unique), so the auto-generated one is fine. Then Click the next "Propose changes" button (if the button says something else, don't click it).

You should be brought to the "Open a pull request" page! and you should see `base:main` <- `compare:fdiengott-name-of-pull-request`. This is correct and you shouldn't need to set it yourself, but I'd double check we are merging your changes into `main`. Feel free to write a description of the change (this is kept in the history of all of the changes to the site) and then click "Create pull request".

## What to include in the files

In each folder should be a template file called `-template.md` (I used the minus is to allow the file to be filtered out from the site). Open this file and click the "Code" tab, instead of "Preview" or "Blame" (the default, Preview tab is not helpful). Copy this text into your new file. It should have a section surrounded by three dashes and a list of key/value pairs. Some of these are required fields and some are optional. The optional fields have question marks at the end of the value.

## There's a website preview?

After a minute on the pull request page, you should see a box that a netlify bot has created. Inside is a link to the "Deploy Preview". If there is not one there, you have broken the site with your change. You can check what you did wrong by reviewing what you changed in the "Files changed" tab. If you can't figure it out, reach out to me.

This is a full version of the site, so you will just navigate to wherever you changed and see how it looks.

## Merging in your changes to the public site

Once you are confident nothing broke and you are happy with the changes, you can merge them into the main branch. You do this by simply clicking the "Merge pull request" button near the bottom of the page.

If you need to change something, because the site broke or for whatever reason, you can go to the "Files changed" tab, click on the three dots below the "Review changes" button and click edit file. Once you've successfully edited the file, click "Commit changes..." again, however, this time you'll want to "Commit directly to the name-of-this-pull-request-branch" branch. Then you'll be able to review the new preview.

If you decide you want to discard the changes that are in a pull request, you can do so by clicking on the "Close pull request" button at the bottom of the pull request page.

## Adding multiple files

To add multiple files in different places (like content and an image), you can go through the normal flow for the first file, but then on the subsequent files, you'll want to "Commit directly to the name-of-this-pull-request-branch" branch.

## Adding images

One other thing I haven't yet mentioned, is how to add images! The location is a bit different than the content files. All images live inside of the `public` folder. The process is the same as the files, except after clicking "Add file", you'll click "Upload files". When you want to reference one of those images in a content file, you'll just have the link be something like `/name-of-image.png`, with a preceding forward slash.

```md
---
image: /name-of-image.png
---
```

## Conclusion

And there you have it! Let me know if you have any questions or if there's anything else I missed.
