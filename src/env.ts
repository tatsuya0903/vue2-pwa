export class Env {
  static get title(): string {
    return process.env.VUE_APP_TITLE ?? 'タイトル'
  }
  static get commitHash(): string | null {
    return process.env.VUE_APP_COMMIT_HASH ?? null
  }
  static get commitUrl(): string | null {
    if (this.commitHash === null) {
      return null
    }
    return `https://github.com/tatsuya0903/vue2-pwa/commit/${this.commitHash}`
  }
}
