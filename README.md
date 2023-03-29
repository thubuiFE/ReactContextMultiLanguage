# Mục Lục
1. [React Context](#context)
    1. [React context là gì ?](#context-what)
    2. [Khi nào nên sử dụng React context ?](#context-when)
    3. [Cách sử dụng React context](#context-how)
    4. [Hook useContext](#context-hook)
    5. [React context thay thế Redux](#context-redux)
2. [Demo React Context MultiLanguage](#demo)
    1. [Bước 1: Tạo bộ từ điển](#demo-languages)
    2. [Bước 2: Tạo context](#demo-create-context)
    3. [Bước 3: Đóng gói các components với LocalProvider](#demo-localProvider)
    4. [Bước 4: Setup bộ chọn ngôn ngữ](#demo-setup-select)
    5. [Bước 5: Bước 5: Gắn text cần đa ngôn ngữ](#demo-final)
3. [References](#references)

# React Context <a name="context"></a>

## React context là gì ? <a name="context-what"></a>
- React context cho phép định nghĩa data-store và sử dụng dữ liệu ở bất kì component mà không cần truyền dữ liệu thông qua props. Hiểu đơn giản thì React context cho phép tạo các biến toàn cục có thể sử dụng cho toàn ứng dụng. 

- Context được tích hợp trong React từ phiên bản React 16.
![image](https://user-images.githubusercontent.com/117882381/228414983-ecd7674d-5c76-457b-a1dd-bd56d772ec79.png)


## Khi nào nên sử dụng React context ? <a name="context-when"></a>
- Bạn đã bao giờ nổi điên khi phải truyền props từ component ông nội => component cha => component con (hoặc nhiều cấp hơn thế nữa). Dữ liệu cần dùng ở component con phải lấy từ component ông nội (component cha ở giữa nên vẫn phải nhận props thì component con mới có cái để dùng). Vấn đề này còn có một tên gọi nghe chuyên nghiệp hơn đó là: `Props drilling`.

- Hãy cùng xem ví dụ bên dưới.
<div align="center">
<img width="715" alt="image" src="https://user-images.githubusercontent.com/117882381/228446757-eeb042d9-0e27-4007-8fcf-0b7f276de3f6.png">
</div>

- Ở ví dụ trên, có thể thấy component con của `App` như `Header` cần dữ liệu `theme` nên được truyền xuống thông qua props.
Tuy nhiên component `Header` **không cần** dữ liệu `theme`, mà nó sẽ **tiếp tục truyền xuống** cho component con của nó là `User`, `Login`, `Menu`. 

=> Lúc này, `React context` xuất hiện để giải quyết vấn đề trên. 

=> Nói tóm lại, khi **dữ liệu cần được sử dụng ở nhiều component có level khác nhau**, chúng ta có thể suy nghĩ đến việc dùng React context. 

## Cách sử dụng React context <a name="context-how"></a>
- Có 4 bước để sử dụng React context

1. Tạo context sử dụng phương thức `createContext`.
2. Bọc `context provider` vừa tạo bên ngoài **cụm component** mà chúng ta cần sử dụng dữ liệu.
3. Thêm dữ liệu vào `context provider` sử dụng prop `value`.
4. Lấy dữ liệu ra và sử dụng ở **bất kì component** nào (lưu ý các component này phải được wrap bởi context provider) thông qua `context consumer`.
    
<div align="center">
<img width="713" alt="image" src="https://user-images.githubusercontent.com/117882381/228413612-08768000-5b24-40b9-b722-a20a649a7ae6.png">
</div>

## Hook useContext <a name="context-hook"></a>
- Từ phiên bản `React 16.8` với sự xuất hiện của hook trong React. Chúng ta có thể sử dụng context thông qua hook `useContext`.

- Cũng là ví dụ trên, nhưng sử dụng hook useContext

<div align="center">
<img width="713" alt="image" src="https://user-images.githubusercontent.com/117882381/228413791-e186f5bd-c78e-45c3-a844-78a23439cda4.png">
</div>


## React context thay thế Redux ? <a name="context-redux"></a>
- `Redux` và `Context API` đều là các công cụ giúp quản lý dữ liệu của ứng dụng một cách hiệu quả. Cả hai đều giống nhau ở cách thiết kế wrapper bọc ngoài các component cần sử dụng dữ liệu. 

- Tuy nhiên Redux khá phức tạp với nhiều khái niệm và các luồng xử lý. Context API thì đơn giản hơn nên có thể dễ dàng sử dụng đối với các ứng dụng nhỏ, không cần xử lý nhiều. 
![image](https://user-images.githubusercontent.com/117882381/228414932-8d887c16-6f04-49d4-bc2f-3e51e9564ce0.png)

# Demo React Context MultiLanguage <a name="demo"></a>
- Để minh hoạ cho những lý thuyết bên trên, mình sẽ demo **chức năng đa ngôn ngữ** sử dụng React Context. 

## Bước 1: Tạo bộ từ điển <a name="demo-languages"></a>
- Tạo folder `/languages` bao gồm các file: vi.json, en.json, index.json. Đây là nơi chứa các text cần được đa ngôn ngữ trong ứng dụng. 
<div align="center">
<img width="1372" alt="image" src="https://user-images.githubusercontent.com/117882381/228442029-9c8d92a6-ab21-4db6-827f-48a2906b3009.png">
</div>

## Bước 2: Tạo context <a name="demo-create-context"></a>
- Tạo folder `/contexts` chứa file `LocaleContext.js`. Đây sẽ là file xử lý đa ngôn ngữ cho toàn ứng dụng. 

```
// libs
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
// hooks
import useLocalStorage from "../hooks/useLocalStorage";
// locales
import { locales } from "../languages";

const LocaleContext = createContext();

export const LocalProvider = ({ children }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");
  
  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        localeDataSource: locales[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

LocalProvider.propTypes = {
  children: PropTypes.string,
};
```

- Giải thích code
    * Tạo `context` sử dụng phương thức `createContext`
    * `LocalProvider` sẽ đảm nhận bọc ngoài các component cần đa ngôn ngữ, nhận vào `children` là các component. 
    * Dữ liệu cần sử dụng sẽ được thêm vào `context provider` thông qua prop `value` bao gồm
        + ***locale***: ngôn ngữ hiện tại
        + ***setLocale***: cập nhật lại ngôn ngữ
        + ***localeDataSource***: bộ từ điển của ứng dụng
    * Định nghĩa `useLocale` để lấy bộ dữ liệu ra sử dụng ở các component thông qua hook `useContext`

- Bên cạnh `context`, mình sử dụng thêm custom hook: `useLocalStorage` - dùng để cập nhật lại ngôn ngữ mà người dùng chọn và lưu vào `localStorage`. Ngôn ngữ mặc định sẽ là `vi`

## Bước 3: Đóng gói các components với LocalProvider <a name="demo-localProvider"></a>
- Ở bước này, mong muốn đa ngôn ngữ toàn bộ ứng dụng, nên mình sẽ cho `LocalProvider` bọc bên ngoài App

```
// components
import TopHeader from "./mains/TopHeader";
// contexts
import { LocalProvider } from "./contexts/LocaleContext";
// others
import "./App.scss";

function App() {
    return (
        <LocalProvider>
            <div className="doctor-care-wrapper">
                <TopHeader />
            </div>
        </LocalProvider>
    );
}

export default App;
```

## Bước 4: Setup bộ chọn ngôn ngữ <a name="demo-setup-select"></a>
- Ở đây, mình sẽ sử dụng `select` cho người dùng chọn ngôn ngữ.

```
// libs
import React from "react";
// contexts
import { useLocale } from "../../contexts/LocaleContext";

const HeaderComponent = () => {
  const { locale, setLocale, localeDataSource } = useLocale();

  return (
      <div className="locale-change">
        <select
          className="select-change-locale"
          defaultValue={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="vi">{localeDataSource.vi}</option>
          <option value="en">{localeDataSource.en}</option>
        </select>
      </div>
  );
};

export default HeaderComponent;

```

- Giải thích code
    * Sử dụng hook `useLocale` để lấy ra các giá trị được lưu trong context
    * `defaultValue`: lấy locale - ngôn ngữ mặc định lưu trong localStorage
    * `onChange`: khi select thay đổi, gọi `setLocale` để cập nhật lại ngôn ngữ vào localStorage

## Bước 5: Gắn text cần đa ngôn ngữ <a name="demo-final"></a>
- Sử dụng bộ dữ liệu `localeDataSource` trong context. Map đúng key với text cần hiển thị, chúng ta đã hoàn thành đa ngôn ngữ cho ứng dụng. 

```
// components
import NumberTop from "../../molecules/NumberTop";
// contexts
import { useLocale } from "../../contexts/LocaleContext";
// others
import "./styles.scss";

const NumberList = () => {
  const { localeDataSource } = useLocale();

  return (
    <div className="number-list-wrapper">
      <div className="number-list-wrapper-inner">
        <NumberTop number="+3.500" text={localeDataSource?.patients_treated} />
        <NumberTop
          number="+15"
          text={localeDataSource?.specialists_available}
        />
        <NumberTop number="+10" text={localeDataSource?.years_on_the_market} />
      </div>
    </div>
  );
};

export default NumberList;
```

# References <a name="references"></a>
https://www.freecodecamp.org/news/react-context-for-beginners/

https://react.dev/reference/react/useContext


