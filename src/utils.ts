export function groupByKeywords<
  T extends Record<string, any>,
  K extends readonly string[]
>(
  data: T[],
  keywords: K,
  field: keyof T,
  options?: {
    unique?: boolean;
    sort?: boolean;
  }
): Record<K[number], T[]> {
  const { unique = false, sort = false } = options || {};

  return keywords.reduce((acc:any, keyword) => {
    let filtered = data.filter((item) =>
      String(item[field]).toLowerCase().includes(keyword.toLowerCase())
    );

    if (unique) {
      filtered = Array.from(
        new Map(
          filtered.map((item) => [JSON.stringify(item), item])
        ).values()
      );
    }

    if (sort) {
      filtered = [...filtered].sort((a, b) =>
        String(a[field]).localeCompare(String(b[field]))
      );
    }

    acc[keyword] = filtered;

    return acc;
  }, {} as Record<K[number], T[]>);
}