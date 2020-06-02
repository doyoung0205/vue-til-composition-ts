/**
 * @vue/composition-api 가 변경 되었을 떄 이를 사용하는 개발자는 API / 변경/삭제 에 대한 권한이 없다.
 * 그래서 업데이트 되는 순간 프로젝트에 직접적인 영향을 전파하게 된다. 이런 부분을 "외부 의존성" 이라고 부른다.
 * 외부 의존성은 직접적으로 조작할 수 있는 권한이 없음으로 의존성이 강하다.이를 약하게 만드는 가장 쉬운 방법은 중간에
 * 무언가를 껴넣는 것이다.
 *
 * 해결방안 : 외부 의존성을 최소화 하면서 Composition API 를 안전하게 적용하기 위한 대안으로 Wrapper 패턴을 사용할 수 있다.
 */
export {
  SetupContext,
  defineComponent,
  onMounted,
  onBeforeMount,
  ref,
  reactive,
  toRefs,
  computed,
  watch
} from "@vue/composition-api";
