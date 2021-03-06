import Link from "next/link";
import { THEMES } from "../../shared/enums";
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils";
import classes from './ArticleCard.module.scss';

const SerachArticleCard = ({ article, theme = THEMES.LIGHT, path }: { article: IArticleHeaderData, theme: THEMES, path: string }) => (
  <div className={combineClasses(classes.article_card_wrap)}>
    <div className={combineClasses(classes.article_card, "px-15 py-10", theme === THEMES.DARK ? classes.dark : null)}>
      <p className={combineClasses(classes.article_card__date, "font-regular font-12 mt-10 mb-5")}>{article.date}</p>
      <Link href={path} passHref={true}>
        <a>
          <h1 className={combineClasses(classes.article_card__title, "font-22 font-bold my-0")} >
            {article.articleTitle}
          </h1>
        </a>
      </Link>
      <div className={classes.article_card__tags}>
        {
          article.tags.split(',').map((each, i) => (
            <span key={i} className="font-12 font-regular mr-10" >#{each}</span>
          ))
        }
      </div>
      <div className={combineClasses(classes.article_card_footer, "mb-10")}>
        <div className={classes.author}>
          <div className={classes.author_img}></div>
          <p className={combineClasses(classes.author_name, 'font-12 font-medium')}>
            {article.author.name}
          </p>
        </div>
        {
          article.category && <>
            <p className="font-12 px-5">in</p>
            <p className={combineClasses(classes.article_card__category, "font-medium font-12")}>
              <Link href={"/blog/" + article.category} passHref={true}>
                {article.category}
              </Link>
            </p>
          </>
        }
      </div>
    </div>
  </div>
)
export default SerachArticleCard