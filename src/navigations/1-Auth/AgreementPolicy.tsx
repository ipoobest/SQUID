import React, { useState } from 'react'
import { MyBackground } from '../../components/MyBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'
import { PrimaryButton } from '../../components/Button'
import { useNavigation } from 'react-navigation-hooks'
import { COLORS, FONT_FAMILY } from '../../styles'
import Icon from 'react-native-vector-icons/Entypo'
import { CheckBox } from 'react-native-elements'
import { BackButton } from '../../components/BackButton'
import { FormHeader } from '../../components/Form/FormHeader'

export const AgreementPolicy = () => {
  const navigation = useNavigation()
  const [agree, setAgree] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="light-content" />
      <FormHeader>
        <View style={styles.header}>
          <Text style={styles.title}>ข้อตกลงและเงื่อนไข</Text>
          <Text style={styles.subtitle}>ในการใช้บริการ</Text>
        </View>
      </FormHeader>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: 'white',
          }}
          style={{
            borderColor: COLORS.GRAY_2,
            borderWidth: 1,
            borderRadius: 4,
          }}
        >
          <View style={{ padding: 16 }}>
            <Text style={styles.agreement}>{agreementText} </Text>
          </View>
        </ScrollView>
      </View>
      <CheckBox
        title="ฉันยอมรับข้อตกลงและเงื่อนไข"
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          marginBottom: 16,
        }}
        checked={agree}
        onPress={() => setAgree(!agree)}
        checkedColor={COLORS.BLUE}
        textStyle={{ color: COLORS.BLACK_1, fontSize: 16 }}
      />
      <View style={styles.footer}>
        <PrimaryButton
          disabled={!agree}
          title={'ถัดไป'}
          style={{ width: '100%' }}
          containerStyle={{ width: '100%' }}
          onPress={() => {
            navigation.navigate('AuthPhone')
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontFamily: FONT_FAMILY,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 40,
    alignItems: 'center',
    color: COLORS.BLACK_1,
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: FONT_FAMILY,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'center',
    color: COLORS.GRAY_2,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  agreement: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.GRAY_4,
    marginBottom: 16,    
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
})

const agreementText = 'เอกสารแจ้งข้อมูลการประมวลผลข้อมูลส่วนบุคคลผ่านแอปพลิเคชัน “หมอชนะ/MorChana”'
+ '\n' + '\n'
+ 'ทีมพัฒนาร่วมภาครัฐและเอกชน (“เรา”) ได้จัดทำแอปพลิเคชัน “หมอชนะ/MorChana” เพื่อเป็นเครื่องมือช่วยแพทย์ พยาบาล หน่วยงานของรัฐ ผู้ประกอบการร้านค้าต่างๆ และที่สำคัญ คือ ช่วยตัวท่านเอง ในการดูแลและป้องกันตนเองจากการระบาดโรคติดเชื้อไวรัสโคโรนา ๒๐๑๙ โดยแอปพลิเคชัน “หมอชนะ/MorChana” จะเก็บรวบรวม ใช้ และเผยแพร่ข้อมูลที่จำเป็น เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพอนามัยของท่าน คนรอบข้าง และประชาชน โดยติดตามข้อมูลการติดเชื้อ โอกาสหรือความเสี่ยงในการติดเชื้อ และเฝ้าระวังสถานการณ์การระบาดของโรค COVID-19 จากการให้ข้อมูลของท่านเอง มีรายละเอียด ดังนี้' + '\n'
+ ' ' + '\n'
+ '1. แอปพลิเคชัน “หมอชนะ/MorChana” ช่วยดูแลได้อย่างไร' + '\n'
+ '- 1.1 มีข้อมูลช่วยสังเกตพฤติกรรมของตัวเองว่า ได้เข้าไปในสถานที่หรือพื้นที่ที่มีความเสี่ยงหรือไม่ เพื่อให้ระมัดระวังตนเอง และดูแลคนรอบข้างได้' + '\n'
+ '- 1.2 ช่วยแพทย์ พยาบาล บุคลากรทางการแพทย์ ในการสอบประวัติผู้ป่วย ช่วยให้สอบประวัติรวดเร็วขึ้น และรักษาพยาบาลได้รวดเร็วขึ้น  ' + '\n'
+ '- 1.3 เมื่อพบผู้ป่วย สามารถแจ้งเตือนผู้ที่มีความเสี่ยงจะติดเชื้อจากผู้ป่วยได้ทันที โดยไม่เสียเวลาค้นหา และให้คำแนะนำที่เหมาะสมได้ทันท่วงที เช่น ให้รีบมาพบแพทย์ที่โรงพยาบาล' + '\n'
+ '- 1.4 เมื่อต้องไปในที่สาธารณะ หรือที่ที่มีคนเข้าออกจำนวนมาก เช่น ร้านค้า หรือตลาด จะมีข้อมูลช่วยในการคัดกรองผู้ป่วยหรือผู้ที่มีความเสี่ยง และช่วยดูแลผู้อื่นที่เข้าไปในสถานที่เดียวกัน' + '\n'
+ '\n'
+ '2. แอปพลิเคชัน “หมอชนะ/MorChana” ต้องใช้ข้อมูลอะไรบ้าง' + '\n'
+ 'ข้อมูลที่เราจะรวบรวมจากท่านผ่านแอปพลิเคชัน “หมอชนะ/MorChana” เป็นข้อมูลสำคัญและจำเป็น เพื่อให้แอปพลิเคชัน “หมอชนะ/MorChana” มีส่วนช่วยในการดูแลและป้องกันการระบาดโรคติดเชื้อไวรัสโคโรนา ๒๐๑๙ โดยมีข้อมูลที่ต้องเก็บรวบรวมจากท่าน ดังนี้' + '\n'
+ '- 2.1 เบอร์โทรศัพท์ของท่านที่ใช้ลงทะเบียนผ่านแอปพลิเคชัน “หมอชนะ/MorChana”' + '\n'
+ '- 2.2 ภาพถ่ายของท่าน ด้วยการเซลฟี่' + '\n'
+ '- 2.3 อายุของท่าน' + '\n'
+ '- 2.4 ที่อยู่ เฉพาะอำเภอและจังหวัดที่ท่านอยู่' + '\n'
+ '- 2.5 ข้อมูลการ Check-in หรือตำแหน่งที่อยู่ (Location) ของท่าน' + '\n'
+ '- 2.6 ข้อมูลการเข้าใกล้ผู้อื่นที่เก็บและคำนวณโดยแอปพลิเคชัน' + '\n'
+ '- 2.7 ข้อมูลเกี่ยวกับโอกาสในการสัมผัสโรค COVID-19 ตามแบบประเมินของโรงพยาบาล เช่น การเดินไปยังพื้นที่เสี่ยง หรือการสัมผัสหรือใกล้ชิดกับผู้ป่วย เป็นต้น' + '\n'
+ '- 2.8 ข้อมูลเกี่ยวกับอาการของโรค COVID-19 ตามแบบประเมินของโรงพยาบาล เช่น อาการไข้' + '\n'
+ ' ' + '\n'
+ '3. วัตถุประสงค์การใช้ข้อมูลมีเพื่ออะไรบ้าง' + '\n'
+ '- 3.1 เพื่อนำไปวิเคราะห์ ประมวลผล และแสดงข้อมูลเกี่ยวกับพฤติกรรมของท่านเอง ว่ามีกิจกรรมที่มีความเสี่ยงหรือมีโอกาสในการสัมผัสโรค COVID-19 หรือไม่ เพื่อที่จะหลีกเหลี่ยงได้ทัน เช่น ไม่เข้าไปพื้นที่เสี่ยงที่เพิ่งพบผู้ป่วย เป็นต้น' + '\n'
+ '- 3.2 เพื่อให้หน่วยงานที่เกี่ยวข้อง ให้คำแนะนำ หรือกำหนดมาตรการป้องกันและดูแลตนเอง เช่น การให้ไปพบแพทย์ การกักตัว หรือเฝ้าระวังและสังเกตพฤติกรรมตนเอง' + '\n'
+ '- 3.3 เพื่อให้ข้อมูลแก่แพทย์ พยาบาล หรือบุคลากรทางการแพทย์ เกี่ยวกับประวัติการเข้าไปยังสถานที่หรือพื้นที่ที่มีความเสี่ยงหรือมีโอกาสในการสัมผัสโรค COVID-19 ตลอดจนอาการที่อาจเข้าข่ายของโรค COVID-19' + '\n'
+ '- 3.4 เพื่อให้ท่านมีข้อมูลที่ให้แก่ผู้ให้บริการ ร้านค้า หรือเจ้าของสถานที่ ตามมาตรการในการคัดกรองผู้ป่วยหรือผู้ที่มีความเสี่ยงที่อาจเข้าไปใช้บริการในสถานที่ดังกล่าว' + '\n'
+ ' ' + '\n'
+ '4. แหล่งที่มาของข้อมูลส่วนบุคคล' + '\n'
+ '- เราได้รับข้อมูลส่วนบุคคลจากท่านโดยตรง ตั้งแต่วันที่ท่านเริ่มใช้งานและตลอดระยะเวลาที่ท่านใช้งานแอปพลิเคชันนี้ โดยไม่ได้รับข้อมูลส่วนบุคคลมาจากแหล่งอื่น' + '\n'
+ ' ' + '\n'
+ '5. ข้อมูลจะเปิดเผยหรือถูกนำไปใช้กับใครหรือโดยหน่วยงานใดบ้าง' + '\n'
+ 'ข้อมูลที่เก็บรวบรวม จะถูกนำไปใช้ และเปิดเผยต่อหน่วยงานที่เกี่ยวข้องกับการป้องกัน เฝ้าระวัง และควบคุมการระบาดของโรค COVID-19 ตามวัตถุประสงค์ในข้อ 3 เท่านั้น ดังนี้' + '\n'
+ '- 5.1 ตัวท่านเอง' + '\n'
+ '- 5.2 แพทย์ พยาบาล บุคลากรทางการแพทย์ และหน่วยงานที่เกี่ยวข้องโดยตรงกับกิจการสาธารณะสุขและบรรเทาสาธารณภัย ได้แก่ กระทรวงสาธารณสุข และกระทรวงมหาดไทย' + '\n'
+ 'ทั้งนี้ เรามีมาตรการเพื่อป้องกันมิให้นำไปใช้นอกเหนือวัตถุประสงค์หรือนำไปใช้หรือเปิดเผยโดยมิชอบ' + '\n'
+ ' ' + '\n'
+ '6. แล้วเก็บข้อมูลไว้นานแค่ไหน' + '\n'
+ 'ภายใน 30 วัน นับจากวันที่สถานการณ์การแพร่ระบาดของโรค COVID-19 สิ้นสุดลง โดยได้มีการยกเลิกการบังคับใช้ของกฎหมายในสถานการณ์ฉุกเฉิน ข้อมูลเหล่านี้จะถูกลบหรือทำให้ข้อมูลของท่านไม่สามารถระบุตัวท่านได้ด้วยวิธีการที่เหมาะสม เว้นแต่ในกรณีกฎหมายกำหนด โดยตลอดเวลาที่ข้อมูลอยู่ที่เรา เราจะจัดเก็บข้อมูลและดูแลด้วยมาตรการที่เหมาะสมเพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่าน และจะไม่เปิดเผยแก่บุคคลหรือ หน่วยงานที่ไม่มีส่วนเกี่ยวข้อง และจะไม่นำข้อมูลดังกล่าวไปใช้ในเชิงพาณิชย์' + '\n'
+ ' ' + '\n'
+ '7. แล้วสิทธิของท่านต่อข้อมูลที่เก็บรวบรวม มีอะไรบ้าง' + '\n'
+ '- สิทธิของท่านต่อข้อมูลส่วนบุคคลที่เราเก็บรวบรวม เป็นไปตามที่กฎหมายว่าด้วยการคุ้มครองข้อมูลส่วนบุคคลกำหนดไว้' + '\n'
+ ' ' + '\n'
+ '8. ช่องทางติดต่อ' + '\n'
+ 'หากพบปัญหา มีข้อสงสัย สามารถติดต่อมายัง เบอร์โทร 1111 ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน (Government Contact Center : GCC 1111)' + '\n'