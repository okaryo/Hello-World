public interface Aggregate {
  public abstract Iterator iterator();
}

public interface Iterator {
  public abstract boolean hasNext();
  public abstract Object next();
}

public class Book {
  private String name;
  public Book(String name) {
    this.name = name;
  }
  public String getName() {
    return name;
  }
}

public class BookShelf implements Aggregate {
  private Book[] books;
  private int last = 0;
  public BookShelf(int maxsize) {
    this.books = new Book[maxsize];
  }
  public Book getBookAt(int index) {
    return books[index];
  }
  public void appendBook(Book book) {
    this.books[last] = book;
    last ++;
  }
  public int getLength() {
    return last;
  }
  public Iterator iterator() {
    return new BookShelfIterator(this);
  }
}

public class BookShelfIterator implements Iterator {
  private BookShelf bookShelf;
  private int index;
  prublic BookShelfIterator(BookShelf bookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  public boolean hasNext() {
    if (index < bookShelf.getLength) {
      return true;
    } else {
      return false;
    }
  }
  public Object next() {
    Book book = bookShelf.getBookAt(index);
    index ++;
    return book;
  }
}

public class Main {
  public static void main(Sting[] args) {
    BookShelf bookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("Around the World in 80 days"));
    bookShelf.appendBook(new Book("Bible"));
    bookShelf.appendBook(new Book("Cinderella"));
    bookShelf.appendBook(new Book("Daddy-Long-Legs"));
    Iteraror it = bookShelf.iterator();
    while (it.hasNext()) {
      Book book = (Book)it.next();
      System.out.println(book.getName);
    }
  }
}