import i18nConfig, { type I18nConfig } from './i18n.config';

export { i18nConfig };
export type { I18nConfig };

/**
 * Environment variables (Astro/Vercel safe)
 * IMPORTANT: must use PUBLIC_* in Vercel + .env
 */
const SITE_URL = import.meta.env.PUBLIC_SITE_URL;
const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION;
const BING_SITE_VERIFICATION = import.meta.env.PUBLIC_BING_SITE_VERIFICATION;

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  authorImage?: string;

  blog?: {
    enabled: boolean;
  };

  blogImageOverlay?: boolean;

  articleFeatures?: {
    toc?: {
      enabled: boolean;
      layout?: 'inline' | 'sidebar' | 'auto';
      sidebarPosition?: 'left' | 'right';
      minHeadings?: number;
      maxDepth?: 2 | 3 | 4;
    };

    comments?: {
      enabled: boolean;
      provider?: 'giscus';
      giscus?: {
        repo: `${string}/${string}`;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        strict?: boolean;
        reactionsEnabled?: boolean;
        emitMetadata?: boolean;
        inputPosition?: 'top' | 'bottom';
        theme?: string;
        lang?: string;
      };
    };
  };

  i18n?: I18nConfig;

  branding: {
    logo: {
      alt: string;
      imageUrl?: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Just Pixel',
  description:
    'Just Pixel — A production-ready Astro 6 starter with 12 beautiful themes, 57+ components, built-in i18n, dark mode and a fast, modern foundation to build anything on.',

  url: SITE_URL || 'https://astrorocket.dev',
  ogImage: '/og-default.svg',

  author: 'Just Pixel',
  email: 'jpxlands@aol.com',

  address: {
    street: '',
    city: 'Birmingham',
    state: '',
    zip: '',
    country: 'UK',
  },

  socialLinks: ['https://github.com/limeweb'],

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },

  authorImage: '/avatar.svg',

  blog: {
    enabled: false,
  },

  blogImageOverlay: true,

  articleFeatures: {
    toc: {
      enabled: true,
      layout: 'auto',
      sidebarPosition: 'left',
      minHeadings: 3,
      maxDepth: 3,
    },

    comments: {
      enabled: false,
      provider: 'giscus',
      giscus: {
        repo: 'owner/repo',
        repoId: '',
        category: 'General',
        categoryId: '',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        inputPosition: 'bottom',
        theme: 'preferred_color_scheme',
        lang: 'en',
      },
    },
  },

  i18n: i18nConfig,

  branding: {
    logo: {
      alt: 'Just Pixel',
      imageUrl: '/favicon.svg',
    },

    favicon: {
      svg: '/favicon.svg',
    },

    colors: {
      themeColor: '#3b82f6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;