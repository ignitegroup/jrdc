import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { connectDB } from '../src/db/connect.js';

async function generateSitemap() {
  try {
    const db = await connectDB();

    // Create sitemap stream
    const stream = new SitemapStream({ hostname: 'https://jrdc.org' });

    // Add static pages
    stream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    stream.write({ url: '/events', changefreq: 'daily', priority: 0.9 });
    stream.write({ url: '/drivers', changefreq: 'weekly', priority: 0.8 });
    stream.write({ url: '/news', changefreq: 'daily', priority: 0.9 });
    stream.write({ url: '/history', changefreq: 'monthly', priority: 0.7 });

    // Add dynamic pages from database
    const drivers = await db.collection('drivers').find().toArray();
    drivers.forEach(driver => {
      stream.write({
        url: `/drivers/${driver._id}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: driver.updatedAt
      });
    });

    const events = await db.collection('events').find().toArray();
    events.forEach(event => {
      stream.write({
        url: `/events/${event._id}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: event.updatedAt
      });
    });

    const news = await db.collection('news').find().toArray();
    news.forEach(article => {
      stream.write({
        url: `/news/${article._id}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: article.updatedAt
      });
    });

    // End sitemap stream
    stream.end();

    // Generate sitemap XML
    const sitemap = await streamToPromise(Readable.from(stream));
    
    // Write sitemap to file
    createWriteStream('./public/sitemap.xml').write(sitemap.toString());
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();