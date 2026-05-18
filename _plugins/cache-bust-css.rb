module Jekyll
  module CacheBust
    require "digest/md5"

    def bust_css_cache(file_name)
      paths = Dir["_sass/**/*", "assets/css/**/*"].select { |path| File.file?(path) }.sort
      digest = Digest::MD5.hexdigest(paths.map { |path| File.read(path) }.join)

      "#{file_name}?v=#{digest}"
    end
  end
end
