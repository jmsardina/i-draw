class Search
  def self.for(keyword)
    Cartoon.where('lower(name) LIKE ?', "%#{keyword.downcase}%")
  end
end