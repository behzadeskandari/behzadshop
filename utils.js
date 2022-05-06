import fakeCategories from "./categories";
import fakePosts from './posts';
export function getDenormalizedPosts() {
  return fakePosts.map((post) => {
    return {
      ...post,
      category: fakeCategories.find((c) => c.Id === post.category)
    };
  });
}

export function getDenormalizedCategories() {
  return fakeCategories.map((category) => {
    return {
      ...category,
      posts: category.posts.map((post) => fakePosts.find((p) => p.Id === post))
    };
  });
}
