import { siteConfig } from '../data/site';

export type MetaInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
};

export const absoluteUrl = (pathname: string): string => {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${siteConfig.siteUrl}${clean}`;
};

export const buildMeta = ({
  title,
  description,
  pathname,
  image = siteConfig.socialImage,
  type = 'website',
  keywords = []
}: MetaInput) => {
  const url = absoluteUrl(pathname);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    canonical: url,
    keywords,
    openGraph: {
      type,
      url,
      title,
      description,
      image: imageUrl
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: imageUrl
    }
  };
};
