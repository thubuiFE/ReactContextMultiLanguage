# React Context

## React context là gì ?
- React context cho phép định nghĩa data-store và sử dụng dữ liệu ở bất kì component mà không cần truyền dữ liệu thông qua props. Hiểu đơn giản thì React context cho phép tạo các biến toàn cục có thể sử dụng cho toàn ứng dụng. 

- Context được tích hợp trong React từ phiên bản React 16.
![image](https://user-images.githubusercontent.com/117882381/228414983-ecd7674d-5c76-457b-a1dd-bd56d772ec79.png)


## Khi nào nên sử dụng React context ?
- Bạn đã bao giờ nổi điên khi phải truyền props từ component ông nội => component cha => component con (hoặc nhiều cấp hơn thế nữa). Dữ liệu cần dùng ở component con phải lấy từ component ông nội (component cha ở giữa nên vẫn phải nhận props thì component con mới có cái để dùng). Vấn đề này còn có một tên gọi nghe chuyên nghiệp hơn đó là: `Props drilling`.

- Hãy cùng xem ví dụ bên dưới.
<div align="center">
<img width="713" alt="image" src="https://user-images.githubusercontent.com/117882381/228415134-45c5e3df-fc0d-415c-b5cd-8bb970a1cd93.png">
</div>

- Ở ví dụ trên, có thể thấy component con của `App` như `Header` cần dữ liệu `theme` nên được truyền xuống thông qua props.
Tuy nhiên component `Header` **không cần** dữ liệu `theme`, mà nó sẽ **tiếp tục truyền xuống** cho component con của nó là `User`, `Login`, `Menu`. 

=> Lúc này, `React context` xuất hiện để giải quyết vấn đề trên. 

=> Nói tóm lại, khi **dữ liệu cần được sử dụng ở nhiều component có level khác nhau**, chúng ta có thể suy nghĩ đến việc dùng React context. 

## Cách sử dụng React context
- Có 4 bước để sử dụng React context

1. Tạo context sử dụng phương thức `createContext`.
2. Bọc `context provider` vừa tạo bên ngoài **cụm component** mà chúng ta cần sử dụng dữ liệu.
3. Thêm dữ liệu vào `context provider` sử dụng prop `value`.
4. Lấy dữ liệu ra và sử dụng ở **bất kì component** nào (lưu ý các component này phải được wrap bởi context provider) thông qua `context consumer`.
    
<div align="center">
<img width="713" alt="image" src="https://user-images.githubusercontent.com/117882381/228413612-08768000-5b24-40b9-b722-a20a649a7ae6.png">
</div>

## Hook useContext
- Từ phiên bản `React 16.8` với sự xuất hiện của hook trong React. Chúng ta có thể sử dụng context thông qua hook `useContext`.

- Cũng là ví dụ trên, nhưng sử dụng hook useContext

<div align="center">
<img width="713" alt="image" src="https://user-images.githubusercontent.com/117882381/228413791-e186f5bd-c78e-45c3-a844-78a23439cda4.png">
</div>


## React context thay thế Redux ?
- `Redux` và `Context API` đều là các công cụ giúp quản lý dữ liệu của ứng dụng một cách hiệu quả. Cả hai đều giống nhau ở cách thiết kế wrapper bọc ngoài các component cần sử dụng dữ liệu. 

- Tuy nhiên Redux khá phức tạp với nhiều khái niệm và các luồng xử lý. Context API thì đơn giản hơn nên có thể dễ dàng sử dụng đối với các ứng dụng nhỏ, không cần xử lý nhiều. 
![image](https://user-images.githubusercontent.com/117882381/228414932-8d887c16-6f04-49d4-bc2f-3e51e9564ce0.png)

# Demo React Context MultiLanguage
- Để minh hoạ cho những lý thuyết bên trên, mình sẽ demo **chức năng đa ngôn ngữ** sử dụng React Context. 

## Bước 1: Tạo bộ từ điển
- Tạo folder `/languages` bao gồm các file: vi.json, en.json, index.json. Đây là nơi chứa các text cần được đa ngôn ngữ trong ứng dụng. 

## Bước 2: Tạo context
- Tạo folder `/contexts` chứa file `LocaleContext.js`. Đây sẽ là file xử lý đa ngôn ngữ cho toàn ứng dụng. 

- Giải thích code
    * Tạo `context` sử dụng phương thức `createContext`
    * `LocalProvider` sẽ đảm nhận bọc ngoài các component cần đa ngôn ngữ, nhận vào `children` là các component. 
    * Dữ liệu cần sử dụng sẽ được thêm vào `context provider` thông qua prop `value` bao gồm
        1. ***locale***: ngôn ngữ hiện tại
        2. ***setLocale***: cập nhật lại ngôn ngữ
        3. ***localeDataSource***: bộ từ điển của ứng dụng
    * Định nghĩa `useLocale` để lấy bộ dữ liệu ra sử dụng ở các component thông qua hook `useContext`

- Bên cạnh `context`, mình sử dụng thêm custom hook: `useLocalStorage` - dùng để cập nhật lại ngôn ngữ mà người dùng chọn và lưu vào `localStorage`. Ngôn ngữ mặc định sẽ là `vi`

## Bước 3: Đóng gói các components với LocalProvider
- Ở bước này, mong muốn đa ngôn ngữ toàn bộ ứng dụng, nên mình sẽ cho `LocalProvider` bọc bên ngoài App

## Bước 4: Setup bộ chọn ngôn ngữ
- Ở đây, mình sẽ sử dụng `select` cho người dùng chọn ngôn ngữ.

- Giải thích code
    * Sử dụng hook `useLocale` để lấy ra các giá trị được lưu trong context
    * `defaultValue`: lấy locale - ngôn ngữ mặc định lưu trong localStorage
    * `onChange`: khi select thay đổi, gọi `setLocale` để cập nhật lại ngôn ngữ vào localStorage

## Bước 5: Gắn text cần đa ngôn ngữ
- Sử dụng bộ dữ liệu `localeDataSource` trong context. Map đúng key với text cần hiển thị, chúng ta đã hoàn thành đa ngôn ngữ cho ứng dụng. 

# References
https://www.freecodecamp.org/news/react-context-for-beginners/

https://react.dev/reference/react/useContext


