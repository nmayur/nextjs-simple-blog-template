
import { iArticle } from '../src/shared/interfaces';

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from './_BLOG_SETUP';

// main article list to display all atricles
/**
 * Example article object
 * {
        path: '/blog/tutorial/how-to-setup-blog',
        featureArticle: true,
        preview: {
            // the author object you created in _BLOG_SETUP file
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "How to setup this plog template",
            tags: "demo, blog setup",
            thumbnail: "/images/demo-image.jpg",
            shortIntro: "These are the steps to setup your blog",
        },
        seo: {
            title: "These are the steps to setup your blog",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    }
 */
export const ARTICLES_LIST: iArticle[] = [
    {
        path: '/blog/tutorial/how-to-setup-blog',
        featureArticle: true,
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "How to setup this blog template",
            tags: "demo, blog setup",
            thumbnail: "/images/blog-setup.jpg",
            shortIntro: "These are the steps to setup your blog",
            category: 'tutorial'
        },
        seo: {
            title: "How To Setup Blog | Next js simple blog template",
            description:
                "Next js simple blog template setup guide. These are the steps to setup your blog",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        path: '/blog/demo-article-default-layout',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "|Demo Article with default layout (with sidebar)",
            tags: "demo, with sidebar, default layout",
            thumbnail: "/images/default-layout-thumb.jpg",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
        },
        seo: {
            title: "Demo Article with default sidebar layout | Next js simple blog template",
            description:
                "Next js simple blog template Default Layout Example.",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        path: '/blog/demo-article-centered-layout',
        preview: {
            author: RUPALI,
            date: "March 03 2022",
            articleTitle: "Demo Article with centered layout",
            tags: "demo,centered, centered layout",
            thumbnail: "/images/centered-layout-thumb.png",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
        },
        seo: {
            title: "Demo Article with centered layout | Next js simple blog template",
            description:
                "Next js simple blog template Centered Layout Example.",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        // for article inside a category the path will also change
        // /blog/{category}/{filename}
        path: '/blog/tutorial/demo-article-with-category',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Demo Article with category",
            tags: "demo, with category",
            thumbnail: "/images/category-thumb.png",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
            // create a folder of you category example "food-recipies" or "travel" etc and put that exact same name in category
            category: 'tutorial'
        },
        seo: {
            title: "Demo Article with category  | Next js simple blog template",
            description:
                "Next js simple blog template, article example with category",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        path: '/blog/tutorial/how-to-deploy-blog',
        featureArticle: true,
        preview: {
            author: RUPALI,
            date: "March 03 2022",
            articleTitle: " How to Export and deploy blog",
            tags: "demo, deploy blog",
            thumbnail: "/images/deploy.png",
            shortIntro: "In this article you will see how to export blog files and what folder to deploy on your hosting.",
            category: 'tutorial'
        },
        seo: {
            title: " How to Export and deploy blog | Next js simple blog template",
            description:
                "Next js simple blog template, article will show you how to export your blog and deploy",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
]