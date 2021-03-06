/**These are necessary imports / components for the page */
import BlogLayout from "../../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes, TextAlign } from "../../../src/shared/enums";
import ArticleImage from "../../../src/components/ArticleImage";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Para from "../../../src/components/Para";
import SectionTitle from "../../../src/components/SectionTitle";
import SectionSeperator from "../../../src/components/SectionSeperator";
import QuotedText from "../../../src/components/QuotedText";
/**These are necessary imports / components for the page */

const ArticleDefaultLayout = () => {
    /**
     * First we have to go the _ARTICLE_LIST.txs in BLOG_CONSTANTS and make an entry of the article you are about to write
     */

    return (
        // BlogLayout is the wrapper which will display Centered or with sidebar layout
        // layout = BlogLayouts.WITH_SIDEBAR || BlogLayouts.CENTERED
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            {/* 
                ArticleImage tag will display images, save images in public -> images folder
                pass image path in src="path"
                if you cant to add caption -> caption="caption text"
                if you cant to add alt text (good for SEO) -> alt="dummy image alt text"
                we have three sizes :  ArticleImageWidths.FUll || ArticleImageWidths.SMALL || ArticleImageWidths.DEFAULT               
            */}
            <ArticleImage src="/images/dummy-banner-img.jpg" caption="this is banner image example" alt="dummy image alt text" size={ArticleImageWidths.FUll} />

            {/* 
                ArticleHeader will display the title, tags and other article header imformation 
                it has two types = ArticleHeaderLayouts.DEFAULT || ArticleHeaderLayouts.CENTERED
            */}
            <ArticleHeader type={ArticleHeaderLayouts.DEFAULT} />

            {/* 
                Para will display a paragraph, tags and other article header imformation 
                you can pass 
                font size of any number: size={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <Para size={18}>
                For category add <b>category: 'tutorial' in preview</b> in your article object in <b>ARTICLES_LIST</b>. (<i>*optional</i>)  You can also create a folder inside blog folder with you category name, like this article is under <b>tutorial</b> category, and created this article file inside the category folder.<br /><br />

                <b>* please note if you are creating a subfolder inside blog the path will also change in the ARTICLE_LIST in _ARTICLE_LIST.tsx file <br /> * {'/blog/{category}/{filename}'}</b>
            </Para>
            {/* 
                This will display dots or line wrt the type passed
                type={SectionSeperatorTypes.LINE | SectionSeperatorTypes.DOTS}
            */}
            <SectionSeperator type={SectionSeperatorTypes.LINE} />

            {/* 
                SectionTitle will display a section title
                you can pass 
                font size of any number: size={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <SectionTitle>
                Lorem ipsum dolor sit amet, consectetur elit, <br /> sed do eiusmod tempor
            </SectionTitle>
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>

            {/* 
                QuotedText will display a Quoted text
                you can pass 
                font size {number}: size={10}
                color : color="#3543EA"
                textAlign: textAlign={TextAlign.LEFT | TextAlign.RIGHT | TextAlign.CENTER | TextAlign.JUSTIFY}
            */}
            <QuotedText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </QuotedText>
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
        </BlogLayout>
    )
}

export default ArticleDefaultLayout;