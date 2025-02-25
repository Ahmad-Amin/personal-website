import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'becsi6jk',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skRSfUrGpRBi3eBYXuDwhUI6tls6ksVIJ3oDOvTf5P3W8gf2Ev9QllElymKfWyfBxKLXMoyPlyCv36fiJrQxUJMhJS6v8YFksdBnH2Rjus7fd2FvdSv5xrHPEJrNx3OZ7Cp5MkWzTekeCNIL68MQomieQgYRHexnas0DgXj9bXdQJ9rqS7Gi',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
