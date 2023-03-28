# React Context

## React context là gì ?
    - React context cho phép định nghĩa data-store và sử dụng dữ liệu ở bất kì component mà không cần truyền dữ liệu thông qua props. Hiểu đơn giản thì React context cho phép tạo các biến toàn cục có thể sử dụng cho toàn ứng dụng. 
    - Context được tích hợp trong React từ phiên bản React 16.

## Khi nào nên sử dụng React context ?
    - Bạn đã bao giờ nổi điên khi phải truyền props từ component ông nội => component cha => component con. Dữ liệu cần dùng ở component con phải lấy từ component ông nội (component cha ở giữa nên vẫn phải nhận props thì component con mới có cái để dùng). Vấn đề này còn có một tên gọi nghe chuyên nghiệp hơn đó là: Props drilling.

    - Hãy cùng xem ví dụ bên dưới.

    - Ở ví dụ trên, có thể thấy component con của App như Header cần dữ liệu theme nên được truyền xuống thông qua props. Tuy nhiên component Header không cần dữ liệu theme, mà nó sẽ tiếp tục truyền xuống cho component con của nó là User, Login, Menu. 
    => Lúc này, React context xuất hiện để giải quyết vấn đề trên. 
    => Nói tóm lại, khi dữ liệu cần được sử dụng ở nhiều component có level khác nhau, chúng ta có thể suy nghĩ đến việc dùng React context. 

## Cách sử dụng React context
- Có 4 bước để sử dụng React context
    1. Tạo context sử dụng phương thức createContext.
    2. Bọc context provider vừa tạo bên ngoài cụm component mà chúng ta cần sử dụng dữ liệu.
    3. Thêm dữ liệu vào context provider sử dụng prop value.
    4. Lấy dữ liệu ra và sử dụng ở bất kì component nào (lưu ý các component này phải được wrap bởi context provider) thông qua context consumer.

## Hook useContext
    - Từ phiên bản React 16.8 với sự xuất hiện của hook trong React. Chúng ta có thể sử dụng context thông qua hook useContext.


## React context thay thế Redux ?
    - Redux và Context API đều là các công cụ giúp quản lý dữ liệu của ứng dụng một cách hiệu quả. Cả hai đều giống nhau ở cách thiết kế wrapper bọc ngoài các component cần sử dụng dữ liệu. 
    - Tuy nhiên Redux khá phức tạp với nhiều khái niệm và các luồng xử lý. Context API thì đơn giản hơn nên có thể dễ dàng sử dụng đối với các ứng dụng nhỏ, không cần xử lý nhiều. 