import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Article, categoryLabels } from '@/data/articles';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border/50">
      <CardHeader className="pb-3">
        <Badge 
          variant="outline" 
          className="w-fit text-xs font-medium border-gold/30 text-gold bg-gold/5"
        >
          {categoryLabels[article.category]}
        </Badge>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          to={`/articles/${article.slug}`}
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:text-gold-dark transition-colors group"
        >
          Lire l'article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
