class StorageService {
  constructor($window) {
    this.$window = $window;
  }

  load(key, defaultValue) {
    if(this.$window.localStorage[`fake-${key}`])
      return JSON.parse(this.$window.localStorage[`fake-${key}`]);
    else {
      this.save(key, defaultValue);
      return defaultValue;
    }
  }

  save(key,value) {
    this.$window.localStorage[`fake-${key}`] = JSON.stringify(value);
  }
}

StorageService.$inject = ['$window'];

export default StorageService;
