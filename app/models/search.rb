class Search
  def self.for(keyword)
    Cartoon.where('name LIKE ?', "%#{keyword}%")
  end
end