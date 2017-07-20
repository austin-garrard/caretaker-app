export function renderIf(condition, component) {
  return condition ? component : null;
}

export function fieldPresent(field) {
  return field !== undefined && field !== null;
}
